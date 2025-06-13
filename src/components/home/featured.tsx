import { useGetArticles } from '@/hooks/useArticles';
import ArticleCardSmall from '../shared/article-card/article-card-small';

export function FeaturedArticlesSection() {
  const { data: articles, isLoading } = useGetArticles();

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        
        {/* Floating elements */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-4 h-4 border-2 border-pink-300 rounded-full animate-bounce"></div>
        
        {/* Large decorative circles */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full opacity-15"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="flex items-center px-8 py-3 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-full border border-indigo-100 shadow-lg">
              <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-indigo-700 font-bold text-sm uppercase tracking-wider">Featured Content</span>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ml-3 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
          
          {/* Main heading */}
          <div className="space-y-6 mb-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
              Editor's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                Picks
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                Handcrafted articles that showcase the beauty of perfect grammar, effective writing techniques, and linguistic mastery at its finest.
              </p>
            </div>
          </div>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-indigo-300"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
            <div className="h-px w-20 bg-gradient-to-r from-purple-300 to-pink-300"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            <div className="h-px w-20 bg-gradient-to-r from-pink-300 to-transparent"></div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="relative">
          
          {/* Background for articles */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-[3rem] shadow-2xl transform rotate-1"></div>
          
          <div className="relative bg-white rounded-[3rem] shadow-xl border border-gray-100 p-8 md:p-12 lg:p-16">
            
            <div className="grid gap-8 lg:grid-cols-3">
              {isLoading ? (
                <>
                  <div className="space-y-4">
                    <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl animate-pulse"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
                      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-3/4 animate-pulse"></div>
                      <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-1/2 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl animate-pulse"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
                      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-4/5 animate-pulse"></div>
                      <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-2/3 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-48 bg-gradient-to-br from-pink-100 to-red-100 rounded-2xl animate-pulse"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
                      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-5/6 animate-pulse"></div>
                      <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-1/3 animate-pulse"></div>
                    </div>
                  </div>
                </>
              ) : (
                articles?.slice(0, 3).map((article, index) => (
                  <div 
                    key={article.id} 
                    className="group relative"
                    style={{
                      animationDelay: `${index * 200}ms`,
                      animation: 'slideInUp 0.8s ease-out forwards'
                    }}
                  >
                    {/* Hover glow effect */}
                    <div className={`absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
                      index % 3 === 0 ? 'bg-gradient-to-r from-indigo-200 to-purple-200' :
                      index % 3 === 1 ? 'bg-gradient-to-r from-purple-200 to-pink-200' :
                      'bg-gradient-to-r from-pink-200 to-red-200'
                    }`}></div>
                    
                    {/* Featured badge for first article */}
                    {index === 0 && (
                      <div className="absolute -top-4 -right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-pulse">
                        ⭐ FEATURED
                      </div>
                    )}
                    
                    <div className="relative group-hover:scale-105 transition-transform duration-500">
                      <ArticleCardSmall article={article} />
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {/* Decorative elements inside the container */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-tl from-purple-100 to-pink-100 rounded-full opacity-40"></div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-6">
            <div className="flex space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full animate-pulse ${
                  i === 0 ? 'bg-indigo-300' : i === 1 ? 'bg-purple-300' : 'bg-pink-300'
                }`} style={{animationDelay: `${i * 300}ms`}}></div>
              ))}
            </div>
            <span className="text-gray-500 font-medium">Curated with excellence</span>
            <div className="flex space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full animate-pulse ${
                  i === 0 ? 'bg-pink-300' : i === 1 ? 'bg-purple-300' : 'bg-indigo-300'
                }`} style={{animationDelay: `${i * 300 + 1500}ms`}}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
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