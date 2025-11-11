import { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Category } from '@/interfaces/category/Category';
import { categoryService } from '@/services/categoryService';

interface CategorySectionProps {
  className?: string;
}

const CategorySection = ({ className = '' }: CategorySectionProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [subcategories, setSubcategories] = useState<{ [key: string]: Category[] }>({});
  const [isLoading, setIsLoading] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    setCategories([
      {name: 'Fashion', slug: 'fashion', slugPath: '', path: '/Fashion'},
      {name: 'Books, movies and music', slug: 'books-movies-and-music', slugPath: '', path: '/Books, movies and music'},
      {name: 'Electronics', slug: 'electronics', slugPath: '', path: '/Electronics'},
      {name: 'Home & garden', slug: 'home-and-garden', slugPath: '', path: '/Home & garden'},
      {name: 'Sporting goods', slug: 'sporting-goods', slugPath: '', path: '/Sporting goods'},
      {name: 'Health and beauty', slug: 'health-and-beauty', slugPath: '', path: '/Health and beauty'}
    ]);
  }, []);

  const handleCategoryClick = async (categorySlug: string) => {
    if (expandedCategory === categorySlug) {
      setExpandedCategory(null);
      return;
    }

    setExpandedCategory(categorySlug);

    if (!subcategories[categorySlug] && !isLoading[categorySlug]) {
      setIsLoading(prev => ({ ...prev, [categorySlug]: true }));
      
      try {
        const response = await categoryService.getCategoryDetail(categorySlug);
        setSubcategories(prev => ({
          ...prev,
          [categorySlug]: response.subCategories
        }));
      } catch (error) {
        console.error('Failed to fetch subcategories:', error);
      } finally {
        setIsLoading(prev => ({ ...prev, [categorySlug]: false }));
      }
    }
  };

  return (
    <div className="bg-gray-100 p-4 font-semibold">
    Category
    <div className={className}>
      {categories.map(category => {
        const isExpanded = expandedCategory === category.slug;
        const categorySubcategories = subcategories[category.slug] || [];

        return (
          <div key={category.name} className="border-b">
            <button
              onClick={() => handleCategoryClick(category.slug)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm text-gray-800">{category.name}</span>
              {isLoading[category.slug] ? (
                <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
              ) : (
                isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />
              )}
            </button>
            
            {isExpanded && categorySubcategories.length > 0 && (
              <div className="bg-gray-50 border-t">
                {categorySubcategories.map(subcat => (
                  <a
                    key={subcat.name}
                    href={`/category/${subcat.slug}`}
                    className="text-sm block pl-8 pr-4 py-3 hover:bg-gray-100 text-gray-700 transition-colors"
                  >
                    {subcat.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default CategorySection;