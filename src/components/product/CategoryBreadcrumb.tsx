import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function CategoryBreadcrumb({ categoryPath }: { categoryPath: string }) {
  const categories = categoryPath.split('/').filter(Boolean); // Split and filter empty parts

  return (
    <nav className="bg-gray-100 py-2 px-4 text-sm">
      <div className="container mx-auto">
        <ol className="flex items-center flex-wrap gap-1">
          {categories.map((category, index) => (
            <li key={index} className="flex items-center">
              <Link
                href={`/category/${slugifyCategoryName(category)}`}
                className="text-gray-600 hover:text-amber-600 hover:underline"
              >
                {formatCategoryName(category)}
              </Link>
              {index < categories.length - 1 && (
                <ChevronRight size={16} className="text-gray-400 mx-1" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

// Utility function to format the category names for display
function formatCategoryName(category: string) {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Utility function to slugify the category names for URLs
function slugifyCategoryName(category: string) {
  return category
    .toLowerCase()       // Convert to lowercase
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric characters
}