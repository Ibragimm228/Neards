import { Container } from './container'

export function Footer() {
	const navigation = {
		main: [
			{ name: 'Home', href: '/' },
			{ name: 'About', href: '/about' },
			{ name: 'Blog', href: '/blog' },
			{ name: 'Contacts', href: '/contacts' },
			{ name: 'Privacy Policy', href: '/privacy-policy' },
		],
	}

	return (
		<footer className="relative bg-gray-900 text-white overflow-hidden">
			{/* Background patterns and effects */}
			<div className="absolute inset-0">
				{/* Grid pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
				
				{/* Gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
				
				{/* Floating elements */}
				<div className="absolute top-8 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
				<div className="absolute bottom-16 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
				<div className="absolute top-1/2 right-20 w-4 h-4 border-2 border-pink-300 rounded-full animate-bounce"></div>
				
				{/* Large decorative shapes */}
				<div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full opacity-50"></div>
				<div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full opacity-30"></div>
			</div>

			<Container>
				<div className="relative z-10">
					{/* Main footer content */}
					<div className="py-16 md:py-20">
						<div className="grid lg:grid-cols-12 gap-12 items-start">
							
							{/* Brand section */}
							<div className="lg:col-span-5 space-y-8">
								<div className="space-y-6">
									<div className="space-y-4">
										<h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
											A Grammar
											<span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
												Nerd's Life
											</span>
										</h2>
									</div>
									<div className="max-w-md">
										<p className="text-lg text-gray-300 leading-relaxed font-light">
											Master the art of perfect communication through expert grammar insights, writing techniques, and linguistic excellence.
										</p>
									</div>
								</div>
								
								{/* Stats */}
								<div className="flex items-center space-x-8">
									<div className="text-center">
										<div className="text-2xl font-bold text-white">50K+</div>
										<div className="text-xs text-gray-400 uppercase tracking-wider">Readers</div>
									</div>
									<div className="w-px h-8 bg-gray-700"></div>
									<div className="text-center">
										<div className="text-2xl font-bold text-white">98%</div>
										<div className="text-xs text-gray-400 uppercase tracking-wider">Accuracy</div>
									</div>
									<div className="w-px h-8 bg-gray-700"></div>
									<div className="text-center">
										<div className="text-2xl font-bold text-white">Daily</div>
										<div className="text-xs text-gray-400 uppercase tracking-wider">Updates</div>
									</div>
								</div>
							</div>
							
							{/* Navigation section */}
							<div className="lg:col-span-4 lg:col-start-7">
								<div className="space-y-6">
									<h3 className="text-lg font-bold text-white">Quick Links</h3>
									<div className="grid grid-cols-2 gap-4">
										{navigation.main.map((item, index) => (
											<a 
												key={item.name} 
												href={item.href} 
												className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
												style={{
													animationDelay: `${index * 100}ms`,
													animation: 'fadeInUp 0.6s ease-out forwards'
												}}
											>
												<div className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
													index % 3 === 0 ? 'bg-indigo-400 group-hover:bg-indigo-300' :
													index % 3 === 1 ? 'bg-purple-400 group-hover:bg-purple-300' :
													'bg-pink-400 group-hover:bg-pink-300'
												}`}></div>
												<span className="group-hover:translate-x-1 transition-transform duration-300">
													{item.name}
												</span>
											</a>
										))}
									</div>
								</div>
							</div>
							
							{/* Newsletter section */}
							<div className="lg:col-span-3 space-y-6">
								<h3 className="text-lg font-bold text-white">Stay Updated</h3>
								<div className="space-y-4">
									<p className="text-sm text-gray-400">
										Get weekly grammar insights and writing tips.
									</p>
									<a
										href="/contacts"
										className="group relative inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
									>
										<span className="relative z-10 flex items-center">
											Subscribe
											<svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
											</svg>
										</span>
										
										{/* Animated background */}
										<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					{/* Bottom section */}
					<div className="border-t border-gray-800 py-8">
						<div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
							
							{/* Copyright */}
							<div className="flex items-center space-x-4">
								<p className="text-sm text-gray-400">
									&copy; {new Date().getFullYear()} A Grammar Nerd's Life. All rights reserved.
								</p>
							</div>
							
							{/* Decorative elements */}
							<div className="flex items-center space-x-4">
								<div className="flex space-x-2">
									{[...Array(3)].map((_, i) => (
										<div key={i} className={`w-2 h-2 rounded-full animate-pulse ${
											i === 0 ? 'bg-indigo-400' : i === 1 ? 'bg-purple-400' : 'bg-pink-400'
										}`} style={{animationDelay: `${i * 300}ms`}}></div>
									))}
								</div>
								<span className="text-xs text-gray-500 font-medium">Crafted with linguistic precision</span>
								<div className="flex space-x-2">
									{[...Array(3)].map((_, i) => (
										<div key={i} className={`w-2 h-2 rounded-full animate-pulse ${
											i === 0 ? 'bg-pink-400' : i === 1 ? 'bg-purple-400' : 'bg-indigo-400'
										}`} style={{animationDelay: `${i * 300 + 1500}ms`}}></div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>

			<style>{`
				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</footer>
	)
}