import { useGetArticles } from '@/hooks/useArticles';

export function CategoriesSection() {
  const { data: articles, isLoading } = useGetArticles();
  const categories = [...new Set(articles?.map(article => article.type))];

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-72 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
        
        {/* Floating shapes */}
        <div className="absolute top-1/4 right-10 w-3 h-3 bg-indigo-300 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-12 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/5 w-4 h-4 border border-pink-300 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-400"></div>
            <div className="mx-4 px-6 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full border border-indigo-100">
              <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">Categories</span>
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-indigo-400 to-transparent"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Explore by
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Interest
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Dive into curated collections of grammar wisdom, writing techniques, and linguistic mastery tailored to your learning journey.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="group relative h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl animate-pulse overflow-hidden"
                >
                  <div className="absolute inset-4">
                    <div className="h-4 bg-gray-300 rounded-full mb-3 animate-pulse"></div>
                    <div className="h-3 bg-gray-300 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                </div>
              ))
            : categories.map((category, index) => (
                <a
                  key={category}
                  href={`/blog?type=${encodeURIComponent(category || '')}`}
                  className="group relative block h-32 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-indigo-200 hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {/* Gradient background overlay */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    index % 4 === 0 ? 'bg-gradient-to-br from-indigo-50 to-purple-50' :
                    index % 4 === 1 ? 'bg-gradient-to-br from-purple-50 to-pink-50' :
                    index % 4 === 2 ? 'bg-gradient-to-br from-pink-50 to-red-50' :
                    'bg-gradient-to-br from-blue-50 to-indigo-50'
                  }`}></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-bold ${
                      index % 4 === 0 ? 'bg-gradient-to-br from-indigo-500 to-purple-500' :
                      index % 4 === 1 ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                      index % 4 === 2 ? 'bg-gradient-to-br from-pink-500 to-red-500' :
                      'bg-gradient-to-br from-blue-500 to-indigo-500'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      {category?.charAt(0)?.toUpperCase() || '?'}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 mb-1">
                      {category}
                    </h3>
                    <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      Explore articles
                    </p>
                  </div>
                  
                  {/* Hover effect line */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${
                    index % 4 === 0 ? 'bg-gradient-to-r from-indigo-500 to-purple-500' :
                    index % 4 === 1 ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                    index % 4 === 2 ? 'bg-gradient-to-r from-pink-500 to-red-500' :
                    'bg-gradient-to-r from-blue-500 to-indigo-500'
                  }`}></div>
                </a>
              ))}
        </div>

        {/* Bottom decorative section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-indigo-300 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Discover your perfect grammar topic</span>
            <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}