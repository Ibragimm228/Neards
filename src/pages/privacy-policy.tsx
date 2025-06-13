import React from 'react'

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        {/* Floating elements */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-4 h-4 border-2 border-pink-300 rounded-full animate-bounce"></div>
        
        {/* Large decorative circles */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full opacity-10"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-indigo-200 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
        <div className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl rotate-12 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="flex items-center px-8 py-3 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-full border border-indigo-100 shadow-lg">
              <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-indigo-700 font-bold text-sm uppercase tracking-wider">Legal Documents</span>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ml-3 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
          
          {/* Main heading */}
          <div className="space-y-6 mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
              Privacy
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                Policy
              </span>
            </h1>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                Your privacy matters as much as perfect grammar. Here's how we protect your personal information with the same care we give to linguistic precision.
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

        {/* Content Container */}
        <div className="relative">
          
          {/* Background for content */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-[3rem] shadow-2xl transform rotate-1"></div>
          
          <div className="relative bg-white rounded-[3rem] shadow-xl border border-gray-100 p-8 md:p-12 lg:p-16">
            
            {/* Content Grid */}
            <div className="prose prose-lg max-w-none">
              
              {/* Section 1 */}
              <div className="mb-12 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl border border-indigo-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🛡️</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Our Commitment to Your Privacy</h2>
                </div>
                <p className="text-gray-700 leading-relaxed m-0">
                  Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Just as we carefully craft each sentence for clarity and precision, we handle your data with the utmost care and transparency.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-12 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl border border-purple-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📊</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Information We Collect</h2>
                </div>
                <p className="text-gray-700 leading-relaxed m-0">
                  We collect information about you in a variety of ways, including personal data you provide directly to us and data collected automatically through your use of our site. This includes your reading preferences, grammar learning progress, and engagement with our educational content to better serve your linguistic journey.
                </p>
              </div>

              {/* Section 3 */}
              <div className="mb-12 p-8 bg-gradient-to-r from-pink-50 to-red-50 rounded-3xl border border-pink-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">How We Use Your Information</h2>
                </div>
                <p className="text-gray-700 leading-relaxed m-0">
                  The information we collect may be used to personalize your grammar learning experience, improve our website's educational content, and provide exceptional customer service. We do not sell or rent your personal information to third parties – your trust is more valuable than any monetary gain.
                </p>
              </div>

              {/* Section 4 */}
              <div className="mb-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🔒</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Security Measures</h2>
                </div>
                <p className="text-gray-700 leading-relaxed m-0">
                  We implement a variety of security measures to maintain the safety of your personal information with the same diligence we apply to proofreading. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Section 5 */}
              <div className="mb-12 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl border border-green-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🔄</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Policy Updates</h2>
                </div>
                <p className="text-gray-700 leading-relaxed m-0">
                  We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. Like revising a manuscript for clarity, we'll notify you of any significant changes to ensure transparency.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-12 p-8 bg-gradient-to-r from-violet-50 to-purple-50 rounded-3xl border border-violet-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">✅</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Your Consent</h2>
                </div>
                <p className="text-gray-700 leading-relaxed m-0">
                  By using our website, you hereby consent to our Privacy Policy and agree to its terms. Your continued use of our grammar resources constitutes acceptance of these privacy practices.
                </p>
              </div>

              {/* Additional Sections */}
              <div className="grid md:grid-cols-2 gap-8">
                
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mr-3">
                      <span className="text-white text-lg">📝</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 m-0">Data Accuracy</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed m-0 text-base">
                    We strive to keep your information accurate and up to date. If you notice any inaccuracies in your personal data, please let us know so we can make the necessary corrections promptly.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mr-3">
                      <span className="text-white text-lg">🔗</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 m-0">Third-Party Services</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed m-0 text-base">
                    Our website may contain features or services provided by third parties. Any information you provide to these third-party services is subject to their privacy policies, not ours.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-lg md:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mr-3">
                      <span className="text-white text-lg">👶</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 m-0">Children's Privacy Protection</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed m-0 text-base">
                    We are committed to protecting the privacy of children. Our services are not intended for individuals under the age of 13, and we do not knowingly collect personal information from children under 13. If we discover we have collected information from a child under 13, we will delete it immediately.
                  </p>
                </div>

              </div>
            </div>
            
            {/* Decorative elements inside the container */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-tl from-purple-100 to-pink-100 rounded-full opacity-40"></div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`w-3 h-3 rounded-full animate-pulse ${
                    i === 0 ? 'bg-indigo-300' : i === 1 ? 'bg-purple-300' : 'bg-pink-300'
                  }`} style={{animationDelay: `${i * 300}ms`}}></div>
                ))}
              </div>
              <span className="text-gray-600 font-medium">Questions about our privacy policy?</span>
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`w-3 h-3 rounded-full animate-pulse ${
                    i === 0 ? 'bg-pink-300' : i === 1 ? 'bg-purple-300' : 'bg-indigo-300'
                  }`} style={{animationDelay: `${i * 300 + 1500}ms`}}></div>
                ))}
              </div>
            </div>
            <a 
              href="/contacts" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contact Us
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}