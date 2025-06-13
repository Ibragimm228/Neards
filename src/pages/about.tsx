import { Container } from '../components/shared/container'

export function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
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

        <Container className="relative z-10">
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center justify-center mb-8">
              <div className="flex items-center px-8 py-3 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-full border border-indigo-100 shadow-lg">
                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-indigo-700 font-bold text-sm uppercase tracking-wider">About Us</span>
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ml-3 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            {/* Main heading */}
            <div className="space-y-6 mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                A Grammar Nerd's
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Life
                </span>
              </h1>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                  Your ultimate destination for grammar insights, language tips, and linguistic adventures that make the complexities of language beautifully simple.
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
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <Container>
          <div className="relative">
            {/* Background decorative card */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-[3rem] shadow-2xl transform rotate-1"></div>
            
            {/* Main content card */}
            <div className="relative bg-white rounded-[3rem] shadow-xl border border-gray-100 p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full border border-indigo-200">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-indigo-700 font-semibold text-sm uppercase tracking-wider">Our Story</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                    Building a Community of
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                      Language Lovers
                    </span>
                  </h2>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Welcome to A Grammar Nerd's Life, your premier blog for exploring the fascinating world of grammar, syntax, and linguistic precision. Our mission is to make grammar accessible, enjoyable, and even exciting for language enthusiasts everywhere.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Founded in 2023 by passionate linguists, we strive to build a community where grammar rules are celebrated, language mysteries are unraveled, and every comma placement is a victory worth sharing.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl"></div>
                  <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                    <img
                      src='https://images.unsplash.com/photo-1499750310107-5fef28a66643'
                      alt='A Grammar Nerd`s Life Introduction'
                      className='w-full h-[300px] object-cover rounded-2xl'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <Container>
          <div className="relative">
            {/* Background decorative card */}
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-50 to-pink-50 rounded-[3rem] shadow-2xl transform -rotate-1"></div>
            
            {/* Main content card */}
            <div className="relative bg-white rounded-[3rem] shadow-xl border border-gray-100 p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative lg:order-2">
                  <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-bl from-purple-100 to-pink-100 rounded-3xl"></div>
                  <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                    <img
                      src='https://images.unsplash.com/photo-1529070538774-1843cb3265df'
                      alt='Our Mission'
                      className='w-full h-[300px] object-cover rounded-2xl'
                    />
                  </div>
                </div>
                
                <div className="space-y-6 lg:order-1">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full border border-purple-200">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                    Perfecting Language
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                      One Rule at a Time
                    </span>
                  </h2>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      At A Grammar Nerd's Life, we believe that mastering grammar is the key to powerful communication. Our mission is to demystify complex grammatical concepts and transform them into practical, memorable lessons that enhance your writing and speaking abilities.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We aim to be your trusted grammar companion, covering everything from basic punctuation to advanced syntactic structures, ensuring that every language learner finds their path to linguistic excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Authors Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-10 w-3 h-3 bg-indigo-300 transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-1/3 left-12 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/5 w-4 h-4 border border-pink-300 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <Container className="relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-400"></div>
              <div className="mx-4 px-6 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full border border-indigo-100">
                <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">Our Team</span>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-indigo-400 to-transparent"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Meet Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                Grammar Experts
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Our passionate team of linguists and grammar enthusiasts brings decades of expertise to A Grammar Nerd's Life. Get to know our language lovers!
            </p>
          </div>

          {/* Authors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Author 1 */}
            <div className="group relative">
              <div className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-indigo-200 to-purple-200"></div>
              
              <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8 group-hover:scale-105 transition-transform duration-500">
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <img
                      src='/authors/1.avif'
                      alt='Author Dr. Margaret Syntaxson'
                      className='relative w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg'
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Margaret Syntaxson</h3>
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full">
                      <span className="text-sm font-semibold text-indigo-700">Chief Grammar Officer</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Dr. Syntaxson holds a Ph.D. in Linguistics from Oxford. With 15 years of experience in grammar instruction, she transforms complex grammatical concepts into digestible lessons for our readers.
                  </p>
                </div>
                
                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              </div>
            </div>

            {/* Author 2 */}
            <div className="group relative">
              <div className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-purple-200 to-pink-200"></div>
              
              <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8 group-hover:scale-105 transition-transform duration-500">
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <img
                      src='/authors/2.avif'
                      alt='Author Professor Daniel Punctuation'
                      className='relative w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg'
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Prof. Daniel Punctuation</h3>
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
                      <span className="text-sm font-semibold text-purple-700">Punctuation Specialist</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Professor Punctuation is renowned for his expertise in comma usage, semicolon placement, and the art of perfect punctuation. He makes even the most complex punctuation rules accessible and memorable.
                  </p>
                </div>
                
                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              </div>
            </div>

            {/* Author 3 */}
            <div className="group relative">
              <div className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-pink-200 to-red-200"></div>
              
              <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8 group-hover:scale-105 transition-transform duration-500">
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <img
                      src='/authors/3.avif'
                      alt='Author Emma Wordsmith'
                      className='relative w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg'
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Emma Wordsmith</h3>
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-pink-100 to-red-100 rounded-full">
                      <span className="text-sm font-semibold text-pink-700">Style & Usage Expert</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Emma specializes in writing style, word choice, and modern usage trends. She helps readers navigate the evolving landscape of contemporary English with confidence and flair.
                  </p>
                </div>
                
                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-pink-500 to-red-500"></div>
              </div>
            </div>
          </div>

          {/* Bottom decorative section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-indigo-300 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Grammar perfectionists, linguistic excellence</span>
              <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </Container>
      </section>

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
    </div>
  )
}
