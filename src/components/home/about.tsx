export function AboutSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Geometric background patterns */}
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#6366f1" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border-4 border-indigo-200 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-rose-200 rotate-12" style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          animation: 'float 4s ease-in-out infinite'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Header Section */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Premium Content</span>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none">
                  A
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                    Grammar
                  </span>
                  <span className="block text-4xl md:text-5xl lg:text-6xl text-gray-400 font-light">
                    Nerd's Life
                  </span>
                </h2>
                
                <div className="max-w-xl">
                  <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                    Master the art of perfect communication through expert grammar insights, writing techniques, and linguistic excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">✍️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Writing</h3>
                <p className="text-gray-600 text-sm">Professional techniques for flawless writing</p>
              </div>
              
              <div className="group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">📖</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Grammar Rules</h3>
                <p className="text-gray-600 text-sm">Comprehensive grammar mastery</p>
              </div>
              
              <div className="group">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Precision</h3>
                <p className="text-gray-600 text-sm">Every word counts, every comma matters</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <a 
                href="/about" 
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-none font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-gray-800 overflow-hidden"
              >
                <span className="relative z-10">Discover Our Story</span>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
              
              <div className="flex items-center space-x-4 text-gray-500">
                <div className="w-px h-8 bg-gray-300"></div>
                <span className="text-sm">Join 50,000+ language enthusiasts</span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Main image with creative framing */}
              <div className="relative group">
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-tl from-pink-100 to-red-100 rounded-3xl"></div>
                
                <div className="relative bg-white rounded-3xl p-4 shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                  <img 
                    className="w-full h-[500px] md:h-[600px] object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-700" 
                    src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="A Grammar Nerd's Life" 
                  />
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 animate-pulse">
                <div className="text-3xl font-black text-gray-900">98%</div>
                <div className="text-sm text-gray-500">Accuracy Rate</div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl shadow-xl p-6">
                <div className="text-sm font-semibold opacity-90">Daily Readers</div>
                <div className="text-2xl font-bold">12,000+</div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-12 w-6 h-6 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/4 -left-8 w-5 h-5 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>

        {/* Bottom section with testimonial */}
        <div className="mt-24 border-t border-gray-200 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed">
              "Where linguistic precision meets creative expression"
            </blockquote>
            <div className="mt-8 flex justify-center items-center space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
              <span className="text-sm text-gray-500 font-medium">EST. 2024</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  );
}