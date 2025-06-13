const TESTIMONIALS = [
	{
	  quote:
		'A Grammar Nerd\'s Life has revolutionized my writing. The grammar explanations are crystal clear and have helped me become a more confident communicator.',
	  author: 'Emma Richardson',
	  title: 'Content Writer',
	  image: 'https://randomuser.me/api/portraits/women/32.jpg',
	},
	{
	  quote:
		"The grammar guides on this blog are exceptional. Every article makes complex rules simple and memorable. It's my go-to resource for perfect writing.",
	  author: 'Michael Thompson',
	  title: 'English Teacher',
	  image: 'https://randomuser.me/api/portraits/men/44.jpg',
	},
  ];
  
  export function TestimonialsSection() {
	return (
	  <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
		{/* Background decorative elements */}
		<div className="absolute inset-0">
		  {/* Animated gradient orbs */}
		  <div className="absolute top-20 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
		  <div className="absolute bottom-20 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
		  
		  {/* Geometric patterns */}
		  <div className="absolute top-32 right-16 w-2 h-2 md:w-3 md:h-3 bg-indigo-400 rounded-full animate-bounce"></div>
		  <div className="absolute bottom-40 left-20 w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full animate-ping"></div>
		  <div className="absolute top-1/2 left-16 w-3 h-3 md:w-4 md:h-4 border-2 border-pink-300 rounded-full animate-pulse"></div>
		  
		  {/* Floating lines */}
		  <div className="absolute top-1/4 left-1/3 w-24 md:w-48 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
		  <div className="absolute bottom-1/3 right-1/4 w-32 md:w-64 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
		</div>
  
		<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		  
		  {/* Header Section */}
		  <div className="text-center mb-12 md:mb-20">
			
			{/* Badge */}
			<div className="inline-flex items-center justify-center mb-6 md:mb-8">
			  <div className="flex items-center px-4 md:px-8 py-2 md:py-3 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-full border border-indigo-100 shadow-lg">
				<div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-2 md:mr-3 animate-pulse"></div>
				<span className="text-indigo-700 font-bold text-xs md:text-sm uppercase tracking-wider">Grammar Success Stories</span>
				<div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ml-2 md:ml-3 animate-pulse" style={{animationDelay: '1s'}}></div>
			  </div>
			</div>
			
			{/* Main heading */}
			<div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
			  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight">
				From Our
				<span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
				  Community
				</span>
			  </h2>
			  
			  <div className="max-w-4xl mx-auto">
				<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
				  Discover what our readers have to say about their transformative grammar journey with A Grammar Nerd's Life.
				</p>
			  </div>
			</div>
			
			{/* Decorative line */}
			<div className="flex items-center justify-center space-x-2 md:space-x-4">
			  <div className="h-px w-8 md:w-20 bg-gradient-to-r from-transparent to-indigo-300"></div>
			  <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
			  <div className="h-px w-8 md:w-20 bg-gradient-to-r from-purple-300 to-pink-300"></div>
			  <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
			  <div className="h-px w-8 md:w-20 bg-gradient-to-r from-pink-300 to-transparent"></div>
			</div>
		  </div>
  
		  {/* Testimonials Grid */}
		  <div className="relative">
			
			{/* Background for testimonials */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-2xl md:rounded-[3rem] shadow-2xl transform rotate-1"></div>
			
			<div className="relative bg-white rounded-2xl md:rounded-[3rem] shadow-xl border border-gray-100 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
			  
			  <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
				{TESTIMONIALS.map((testimonial, index) => (
				  <div 
					key={testimonial.author} 
					className="group relative"
					style={{
					  animationDelay: `${index * 300}ms`,
					  animation: 'slideInUp 0.8s ease-out forwards'
					}}
				  >
					{/* Hover glow effect */}
					<div className={`absolute -inset-2 md:-inset-4 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
					  index % 2 === 0 ? 'bg-gradient-to-r from-indigo-200 to-purple-200' : 'bg-gradient-to-r from-purple-200 to-pink-200'
					}`}></div>
					
					{/* Testimonial card */}
					<div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100 group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500">
					  
					  {/* Quote icon */}
					  <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
						<svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
						  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
						</svg>
					  </div>
					  
					  {/* Quote text */}
					  <div className="mb-6 md:mb-8 pt-3 md:pt-4">
						<blockquote className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
						  "{testimonial.quote}"
						</blockquote>
					  </div>
					  
					  {/* Author info */}
					  <div className="flex items-center justify-between">
						<div className="flex items-center space-x-3 md:space-x-4 flex-1">
						  <div className="relative flex-shrink-0">
							<div className={`absolute -inset-0.5 md:-inset-1 rounded-full ${
							  index % 2 === 0 ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'
							} opacity-75 blur-sm`}></div>
							<img
							  className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full object-cover border-2 border-white shadow-lg"
							  src={testimonial.image}
							  alt={`${testimonial.author} - Grammar success story`}
							  loading="lazy"
							/>
						  </div>
						  <div className="min-w-0 flex-1">
							<p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-0.5 md:mb-1 truncate">
							  {testimonial.author}
							</p>
							<p className="text-xs sm:text-sm text-gray-500 font-medium truncate">
							  {testimonial.title}
							</p>
						  </div>
						</div>
						
						{/* Rating stars */}
						<div className="flex space-x-0.5 md:space-x-1 ml-2 flex-shrink-0">
						  {[...Array(5)].map((_, i) => (
							<svg 
							  key={i} 
							  className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ${
								index % 2 === 0 ? 'text-indigo-400' : 'text-purple-400'
							  }`} 
							  fill="currentColor" 
							  viewBox="0 0 20 20"
							>
							  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						  ))}
						</div>
					  </div>
					  
					  {/* Bottom accent line */}
					  <div className={`absolute bottom-0 left-0 h-1 w-full rounded-b-2xl md:rounded-b-3xl ${
						index % 2 === 0 ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'
					  }`}></div>
					</div>
				  </div>
				))}
			  </div>
			  
			  {/* Decorative elements inside the container */}
			  <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-8 h-8 md:w-16 md:h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-60"></div>
			  <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-10 h-10 md:w-20 md:h-20 bg-gradient-to-tl from-purple-100 to-pink-100 rounded-full opacity-40"></div>
			</div>
		  </div>
  
		  {/* Bottom section */}
		  <div className="mt-12 md:mt-20 text-center">
			<div className="inline-flex items-center space-x-3 md:space-x-6">
			  <div className="flex space-x-1 md:space-x-2">
				{[...Array(3)].map((_, i) => (
				  <div key={i} className={`w-2 h-2 md:w-3 md:h-3 rounded-full animate-pulse ${
					i === 0 ? 'bg-indigo-300' : i === 1 ? 'bg-purple-300' : 'bg-pink-300'
				  }`} style={{animationDelay: `${i * 300}ms`}}></div>
				))}
			  </div>
			  <span className="text-sm md:text-base text-gray-500 font-medium">Loved by grammar enthusiasts worldwide</span>
			  <div className="flex space-x-1 md:space-x-2">
				{[...Array(3)].map((_, i) => (
				  <div key={i} className={`w-2 h-2 md:w-3 md:h-3 rounded-full animate-pulse ${
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