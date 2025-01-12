import { CategoryDTO } from '@/interfaces/category/CategoryDTO'

export default function CategoryHeader({ category }: { category: CategoryDTO }) {
    return (
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-3xl font-bold">{category.name}</h1>
              {category.name && (
                <p className="text-gray-600 mt-2">{category.path}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}