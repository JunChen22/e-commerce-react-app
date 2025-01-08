'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ProductListingDTO } from '@/interfaces/product/ProductListing';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { searchService } from '@/services/searchService';

export default function SearchBar() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<ProductListingDTO[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (keyword.trim().length < 2) {
        setSuggestions([]);
        return;
      }

      setIsLoading(true);
      try {
        const results = await searchService.getSearchSuggestions(keyword);
        setSuggestions(results);
      } catch (error) {
        console.error('Search error:', error);
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [keyword]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      router.push(`/search?q=${encodeURIComponent(keyword.trim())}`);
      setShowSuggestions(false);
    }
  };

  return (
    <div ref={searchContainerRef} className="relative flex-grow max-w-[800px]">
      <form onSubmit={handleSearch} className="relative flex">
        <input
          type="text"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            setShowSuggestions(true);
          }}
          className="w-full px-4 py-2 rounded-l-lg border-2 border-r-0 border-amber-400 focus:border-amber-500 focus:outline-none"
          placeholder="Search products..."
        />
        <button
          type="submit"
          className="px-6 bg-amber-400 hover:bg-amber-500 text-white rounded-r-lg flex items-center justify-center"
        >
          <Search size={20} />
        </button>
      </form>

      {showSuggestions && keyword.trim().length > 1 && (
        <div className="absolute z-50 left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg max-h-[400px] overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-gray-500">Loading...</div>
          ) : suggestions.length > 0 ? (
            <div>
              {suggestions.map((product) => (
                <Link
                  key={product.skuCode}
                  href={`/${product.slug}/${product.skuCode}`}
                  className="flex items-center gap-4 p-3 hover:bg-gray-100 transition-colors"
                  onClick={() => setShowSuggestions(false)}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="flex-grow">
                    <div className="text-sm font-medium line-clamp-1">{product.name}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-amber-500 font-bold">${product.originalPrice}</span>
                      {product.listPrice > product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.listPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}