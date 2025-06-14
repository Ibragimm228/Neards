export function CallToActionSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full opacity-3" viewBox="0 0 400 400">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#6366f1" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        
        {/* Decorative elements - адаптивные размеры и позиции */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-2 border-gray-100 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl sm:rounded-3xl rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 right-4 sm:right-10 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border border-pink-100" style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Container */}
        <div className="relative">
          
          {/* Background decorative card */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl lg:rounded-[3rem] shadow-2xl transform rotate-1"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-indigo-50 to-purple-50 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] shadow-xl transform -rotate-1"></div>
          
          {/* Main content card */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl lg:rounded-[3rem] shadow-2xl border border-gray-100 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
            
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Text Content */}
              <div className="lg:col-span-8 space-y-6 md:space-y-8">
                
                {/* Badge */}
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full border border-indigo-200">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                  <span className="text-indigo-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">Join The Community</span>
                </div>
                
                {/* Main heading */}
                <div className="space-y-3 sm:space-y-4">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                    Ready to Master
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                      Perfect Grammar?
                    </span>
                  </h2>
                  
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl font-light">
                    Join thousands of language enthusiasts who receive weekly insights, expert tips, and exclusive grammar guides directly in their inbox.
                  </p>
                </div>
                
                {/* Stats - адаптивная сетка */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">50K+</div>
                    <div className="text-xs sm:text-sm text-gray-500">Subscribers</div>
                  </div>
                  <div className="w-px h-6 sm:h-8 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-xs sm:text-sm text-gray-500">Satisfaction</div>
                  </div>
                  <div className="w-px h-6 sm:h-8 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">Weekly</div>
                    <div className="text-xs sm:text-sm text-gray-500">Updates</div>
                  </div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="lg:col-span-4 space-y-4 sm:space-y-6 w-full">
                
                {/* Main CTA Button - полностью адаптивная */}
                <a
                  href="/contacts"
                  className="group relative w-full inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-gray-900 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-gray-800 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Subscribe Now
                    <svg className="ml-2 sm:ml-3 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </a>
                
                {/* Features list */}
                <div className="space-y-2 sm:space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span>Weekly grammar insights</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span>Exclusive writing tips</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span>Early access to new content</span>
                  </div>
                </div>
                
                {/* Trust indicators */}
                <div className="pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="leading-relaxed">Free forever • Unsubscribe anytime</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom decorative elements - адаптивные размеры и позиции */}
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50"></div>
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-20 md:w-32 h-16 sm:h-20 md:h-32 bg-gradient-to-bl from-indigo-100 to-blue-100 rounded-full opacity-30"></div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-indigo-200 rounded-full animate-pulse" style={{animationDelay: `${i * 200}ms`}}></div>
              ))}
            </div>
            <span className="text-xs sm:text-sm text-center">Trusted by grammar enthusiasts worldwide</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-purple-200 rounded-full animate-pulse" style={{animationDelay: `${i * 200 + 1000}ms`}}></div>
              ))}
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
            transform: translateY(-15px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  );
}