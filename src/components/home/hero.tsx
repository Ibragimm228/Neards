import { Container } from '@/components/shared/container'
import { useState, useCallback, useMemo } from 'react'

export function Hero() {
	const [loaded, setLoaded] = useState(false)

	// Мемоизируем обработчик загрузки изображения
	const handleImageLoad = useCallback(() => {
		setLoaded(true)
	}, [])

	// Мемоизируем массивы для анимированных точек
	const leftDots = useMemo(() => [
		{ delay: 0, color: 'bg-indigo-300' },
		{ delay: 300, color: 'bg-purple-300' },
		{ delay: 600, color: 'bg-pink-300' }
	], [])

	const rightDots = useMemo(() => [
		{ delay: 1500, color: 'bg-pink-300' },
		{ delay: 1800, color: 'bg-purple-300' },
		{ delay: 2100, color: 'bg-indigo-300' }
	], [])

	// Мемоизируем данные функций
	const features = useMemo(() => [
		{
			id: 'grammar',
			icon: '📝',
			title: 'Grammar Rules',
			description: 'Master essential grammar principles',
			gradient: 'from-indigo-500 to-purple-500'
		},
		{
			id: 'writing',
			icon: '✏️',
			title: 'Writing Skills', 
			description: 'Enhance your writing precision',
			gradient: 'from-purple-500 to-pink-500'
		},
		{
			id: 'mastery',
			icon: '🎯',
			title: 'Language Mastery',
			description: 'Perfect your communication',
			gradient: 'from-pink-500 to-red-500'
		}
	], [])

	// Мемоизируем статистику
	const stats = useMemo(() => [
		{ value: '15K+', label: 'Grammar Nerds' },
		{ value: '800+', label: 'Grammar Guides' },
		{ value: 'Daily', label: 'Language Tips' }
	], [])

	return (
		<section className="relative min-h-screen bg-white overflow-hidden">
			{/* Background elements - оптимизированы с will-change */}
			<div className="absolute inset-0">
				{/* Grid pattern - статичный фон */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
				
				{/* Floating geometric shapes - оптимизированы с transform3d */}
				<div className="absolute top-20 left-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-ping will-change-transform"></div>
				<div className="absolute bottom-40 right-1/3 w-4 h-4 bg-purple-400 rounded-full animate-pulse will-change-opacity"></div>
				<div className="absolute top-1/2 right-20 w-5 h-5 border-2 border-pink-300 rounded-full animate-bounce will-change-transform"></div>
				<div 
					className="absolute top-1/3 left-10 w-32 h-32 border-2 border-indigo-100 rounded-full animate-spin will-change-transform" 
					style={{ animationDuration: '30s' }}
				></div>
				
				{/* Large decorative circles - статичные градиенты */}
				<div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-20"></div>
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full opacity-15"></div>
				
				{/* Background image with optimized loading */}
				<div className="absolute right-0 top-0 w-1/2 h-full">
					<div
						className={`absolute inset-0 bg-gradient-to-l from-transparent to-white transition-opacity duration-500 will-change-opacity ${
							loaded ? 'opacity-90' : 'opacity-100'
						}`}
						style={{ zIndex: 1 }}
					/>
					<img
						src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop'
						alt='A Grammar Nerd Life Hero background'
						decoding='async'
						loading='eager'
						fetchPriority='high'
						className='w-full h-full object-cover opacity-30'
						onLoad={handleImageLoad}
					/>
				</div>
			</div>

			<Container className="relative z-10 py-20 lg:py-32">
				<div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
					
					{/* Content Column */}
					<div className="lg:col-span-7 space-y-12">
						
						{/* Badge - оптимизирован с will-change */}
						<div className="inline-flex items-center justify-center">
							<div className="flex items-center px-8 py-3 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-full border border-indigo-100 shadow-lg">
								<div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 animate-pulse will-change-opacity"></div>
								<span className="text-indigo-700 font-bold text-sm uppercase tracking-wider">Welcome to A Grammar Nerd's Life</span>
								<div 
									className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ml-3 animate-pulse will-change-opacity" 
									style={{ animationDelay: '1s' }}
								></div>
							</div>
						</div>
						
						{/* Main heading */}
						<div className="space-y-8">
							<h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-tight">
								Master
								<span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
									Perfect
								</span>
								<span className="block text-4xl md:text-5xl lg:text-6xl text-gray-400 font-light">
									Grammar
								</span>
							</h1>
							
							<div className="max-w-2xl">
								<p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
									Join A Grammar Nerd's Life for comprehensive grammar guides, writing tips, and linguistic insights that transform your communication skills and language mastery.
								</p>
							</div>
						</div>

						{/* Features highlights - оптимизированы с мемоизацией */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{features.map((feature) => (
								<div key={feature.id} className="group">
									<div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 will-change-transform`}>
										<span className="text-white text-2xl">{feature.icon}</span>
									</div>
									<h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
									<p className="text-gray-600 text-sm">{feature.description}</p>
								</div>
							))}
						</div>

						{/* CTA Buttons - оптимизированы hover эффекты */}
						<div className="flex flex-col sm:flex-row gap-6 pt-4">
							<a
								href='/blog'
								className="group relative inline-flex items-center justify-center px-8 py-6 bg-gray-900 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-gray-800 hover:scale-105 overflow-hidden will-change-transform"
							>
								<span className="relative z-10 flex items-center">
									Explore Grammar
									<svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 will-change-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</span>
								
								{/* Animated background */}
								<div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left will-change-transform"></div>
							</a>
							
							<a
								href='/about'
								className="group inline-flex items-center justify-center px-8 py-6 bg-white text-gray-900 rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-indigo-300 hover:-translate-y-1 will-change-transform"
							>
								<span className="flex items-center">
									Meet Our Experts
									<svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 will-change-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</span>
							</a>
						</div>

						{/* Stats section - мемоизированная статистика */}
						<div className="flex items-center space-x-8 pt-8 border-t border-gray-100">
							{stats.map((stat, index) => (
								<div key={`stat-${index}`}>
									<div className="text-center">
										<div className="text-2xl font-bold text-gray-900">{stat.value}</div>
										<div className="text-sm text-gray-500">{stat.label}</div>
									</div>
									{index < stats.length - 1 && (
										<div className="w-px h-8 bg-gray-200 ml-8"></div>
									)}
								</div>
							))}
						</div>
					</div>

					{/* Visual Column - оптимизированы анимации */}
					<div className="lg:col-span-5">
						<div className="relative">
							
							{/* Main decorative card */}
							<div className="relative group">
								<div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 rounded-[3rem] transform rotate-3"></div>
								<div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-tl from-pink-100 to-red-100 rounded-[3rem] transform -rotate-3"></div>
								
								<div className="relative bg-white rounded-[3rem] p-8 shadow-2xl group-hover:shadow-3xl transition-shadow duration-500 border border-gray-100">
									<div className="space-y-6">
										{/* Quote section */}
										<div className="text-center space-y-4">
											<div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
												<span className="text-white text-2xl">📚</span>
											</div>
											<blockquote className="text-xl font-light text-gray-700 leading-relaxed">
												"Perfect grammar is the foundation of powerful communication"
											</blockquote>
										</div>
										
										{/* Feature cards */}
										<div className="grid grid-cols-2 gap-4">
											<div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-2xl text-center">
												<div className="text-2xl font-bold text-indigo-600">99%</div>
												<div className="text-xs text-gray-600">Accuracy Rate</div>
											</div>
											<div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl text-center">
												<div className="text-2xl font-bold text-purple-600">4.8</div>
												<div className="text-xs text-gray-600">Expert Rating</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Floating elements - оптимизированы анимации */}
							<div className="absolute -top-4 -right-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl shadow-xl p-4 animate-bounce will-change-transform">
								<div className="text-sm font-semibold">New Grammar Rule!</div>
								<div className="text-xs opacity-90">Just explained</div>
							</div>
							
							<div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
								<div className="flex items-center space-x-2">
									<div className="w-3 h-3 bg-green-400 rounded-full animate-pulse will-change-opacity"></div>
									<span className="text-sm font-medium text-gray-700">Grammar tips</span>
								</div>
							</div>
							
							{/* Decorative dots - оптимизированы */}
							<div className="absolute top-1/4 -left-8 w-4 h-4 bg-indigo-400 rounded-full animate-pulse will-change-opacity"></div>
							<div 
								className="absolute top-1/2 -right-6 w-3 h-3 bg-purple-400 rounded-full animate-pulse will-change-opacity" 
								style={{ animationDelay: '1s' }}
							></div>
							<div 
								className="absolute bottom-1/4 -left-6 w-5 h-5 bg-pink-400 rounded-full animate-pulse will-change-opacity" 
								style={{ animationDelay: '2s' }}
							></div>
						</div>
					</div>
				</div>

				{/* Bottom decorative section - оптимизированные точки */}
				<div className="mt-20 text-center">
					<div className="inline-flex items-center space-x-6">
						<div className="flex space-x-2">
							{leftDots.map((dot, i) => (
								<div 
									key={`left-${i}`} 
									className={`w-3 h-3 rounded-full animate-pulse will-change-opacity ${dot.color}`} 
									style={{ animationDelay: `${dot.delay}ms` }}
								></div>
							))}
						</div>
						<span className="text-gray-500 font-medium">Your journey to perfect grammar starts here</span>
						<div className="flex space-x-2">
							{rightDots.map((dot, i) => (
								<div 
									key={`right-${i}`} 
									className={`w-3 h-3 rounded-full animate-pulse will-change-opacity ${dot.color}`} 
									style={{ animationDelay: `${dot.delay}ms` }}
								></div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}