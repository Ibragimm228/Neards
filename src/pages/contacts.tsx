import { ContactForm } from '../components/shared/contact-form'

export function ContactsPage() {
  return (
    <>
      <section className="relative min-h-screen py-24 md:py-32 bg-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-32 right-1/4 w-32 h-32 border-4 border-indigo-200 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
          <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl rotate-12 animate-pulse"></div>
          <div className="absolute top-1/2 left-20 w-16 h-16 border-2 border-rose-200" style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            animation: 'float 6s ease-in-out infinite'
          }}></div>
          
          {/* Animated dots */}
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-20 w-4 h-4 border-2 border-pink-300 rounded-full animate-bounce"></div>
          
          {/* Large decorative circles */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-20"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-purple-100 to-pink-100 rounded-full opacity-15"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-20">
            
            {/* Badge */}
            <div className="inline-flex items-center justify-center mb-8">
              <div className="flex items-center px-8 py-3 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-full border border-indigo-100 shadow-lg">
                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-indigo-700 font-bold text-sm uppercase tracking-wider">Get In Touch</span>
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ml-3 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            {/* Main heading */}
            <div className="space-y-6 mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                Let's Connect &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Create Together
                </span>
              </h1>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                  Have questions about grammar? Need writing guidance? Or simply want to share your language learning journey? We'd love to hear from you.
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

          {/* Main Content */}
          <div className="relative">
            
            {/* Background decorative cards */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-[3rem] shadow-2xl transform rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-indigo-50/30 to-purple-50/30 rounded-[3rem] shadow-xl transform -rotate-1"></div>
            
            <div className="relative bg-white rounded-[3rem] shadow-xl border border-gray-100 p-8 md:p-12 lg:p-16">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Image Column */}
                <div className="lg:col-span-5">
                  <div className="relative group">
                    
                    {/* Image with creative framing */}
                    <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-tl from-pink-100 to-red-100 rounded-3xl"></div>
                    
                    <div className="relative bg-white rounded-3xl p-4 shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                      <img 
                        className="w-full h-[500px] object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-700" 
                        src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400" 
                        alt="Contact A Grammar Nerd's Life" 
                      />
                    </div>

                    {/* Floating info cards */}
                    <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 animate-pulse">
                      <div className="text-2xl font-black text-gray-900">24h</div>
                      <div className="text-sm text-gray-500">Response Time</div>
                    </div>
                    
                    <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl shadow-xl p-6">
                      <div className="text-sm font-semibold opacity-90">Languages</div>
                      <div className="text-2xl font-bold">Expert</div>
                    </div>
                    
                    {/* Decorative bouncing elements */}
                    <div className="absolute top-1/4 -left-12 w-6 h-6 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                    <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-1/4 -left-8 w-5 h-5 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
                  </div>
                </div>

                {/* Contact Form Column */}
                <div className="lg:col-span-7 space-y-8">
                  
                  {/* Contact info badges */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full border border-indigo-100">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">Usually responds in 2-4 hours</span>
                    </div>
                    <div className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full border border-purple-100">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <span className="text-sm font-medium text-gray-700">Grammar questions welcome</span>
                    </div>
                  </div>
                  
                  {/* Form container with enhanced styling */}
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-3xl opacity-20"></div>
                    <div className="relative bg-white rounded-3xl border border-gray-100 shadow-lg p-8">
                      <ContactForm />
                    </div>
                  </div>
                  
                  {/* Contact methods */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-xl">✉️</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                      <p className="text-sm text-gray-600">Quick questions & feedback</p>
                    </div>
                    
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-xl">💬</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Community</h3>
                      <p className="text-sm text-gray-600">Join our discussions</p>
                    </div>
                    
                    <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl border border-pink-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-xl">📚</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Resources</h3>
                      <p className="text-sm text-gray-600">Grammar guides & tips</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-bl from-indigo-100 to-blue-100 rounded-full opacity-30"></div>
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
              <span className="text-gray-500 font-medium">Your grammar journey starts here</span>
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
    </>
  )
}