import { useGetArticles } from '@/hooks/useArticles'
import { Link } from 'react-router'
import { Container } from './container'
import { Logo } from './logo'

const LINKS = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'About',
		href: '/about',
	},
	{
		label: 'Blog',
		href: '/blog',
	},
	{
		label: 'Contacts',
		href: '/contacts',
	},
]

export function Header() {
	const { data: articles, isLoading } = useGetArticles()
	const types = [...new Set(articles?.map(article => article.type))]

	return (
		<header className='relative bg-white border-b border-gray-100 shadow-sm overflow-hidden'>
			{/* Background decorative elements */}
			<div className="absolute inset-0">
				{/* Subtle grid pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40"></div>
				
				{/* Floating gradient orbs */}
				<div className="absolute top-4 right-1/4 w-32 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full opacity-60 blur-xl"></div>
				<div className="absolute -top-8 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full opacity-40 blur-lg"></div>
				
				{/* Animated dots */}
				<div className="absolute top-8 left-1/4 w-2 h-2 bg-indigo-300 rounded-full animate-pulse"></div>
				<div className="absolute bottom-8 right-1/3 w-2 h-2 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
			</div>

			<Container>
				<div className='relative z-10 flex flex-col items-center py-8'>
					{/* Logo Section */}
					<div className="relative group">
						<div className="absolute -inset-2 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
						<div className="relative">
							<Logo />
						</div>
					</div>
					
					{/* Main Navigation */}
					<nav className='mt-8'>
						<ul className='flex flex-wrap gap-12 justify-center'>
							{LINKS.map((item, index) => (
								<Link key={item.label} to={item.href}>
									<li className='group relative cursor-pointer'>
										<span className={`font-bold text-lg tracking-wide transition-all duration-300 ${
											index === 0 ? 'text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600' :
											index === 1 ? 'text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600' :
											index === 2 ? 'text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-red-500' :
											'text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600'
										}`}>
											{item.label}
										</span>
										
										{/* Animated underline */}
										<div className={`absolute -bottom-2 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 ${
											index === 0 ? 'bg-gradient-to-r from-indigo-500 to-purple-500' :
											index === 1 ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
											index === 2 ? 'bg-gradient-to-r from-pink-500 to-red-500' :
											'bg-gradient-to-r from-blue-500 to-indigo-500'
										}`}></div>
									</li>
								</Link>
							))}
						</ul>
					</nav>
					
					{/* Categories Navigation */}
					<nav className='mt-12'>
						{isLoading ? (
							<div className="flex flex-wrap gap-6 justify-center">
								{Array.from({ length: 5 }).map((_, index) => (
									<div
										key={index}
										className='h-8 w-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full animate-pulse'
									/>
								))}
							</div>
						) : (
							<ul className='flex flex-wrap gap-8 justify-center'>
								{types.map((item, index) => (
									<Link
										key={item}
										to={`/blog?type=${encodeURIComponent(item || '')}`}
									>
										<li className='group relative cursor-pointer'>
											<div className={`inline-flex items-center px-6 py-3 rounded-full border transition-all duration-300 ${
												index % 4 === 0 ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-100 group-hover:border-indigo-200 group-hover:shadow-lg group-hover:shadow-indigo-100/50' :
												index % 4 === 1 ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-100 group-hover:border-purple-200 group-hover:shadow-lg group-hover:shadow-purple-100/50' :
												index % 4 === 2 ? 'bg-gradient-to-r from-pink-50 to-red-50 border-pink-100 group-hover:border-pink-200 group-hover:shadow-lg group-hover:shadow-pink-100/50' :
												'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100 group-hover:border-blue-200 group-hover:shadow-lg group-hover:shadow-blue-100/50'
											} group-hover:scale-105 group-hover:-translate-y-1`}>
												
												{/* Category icon */}
												<div className={`w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold mr-3 ${
													index % 4 === 0 ? 'bg-gradient-to-br from-indigo-500 to-purple-500' :
													index % 4 === 1 ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
													index % 4 === 2 ? 'bg-gradient-to-br from-pink-500 to-red-500' :
													'bg-gradient-to-br from-blue-500 to-indigo-500'
												}`}>
													{item?.charAt(0)?.toUpperCase() || '?'}
												</div>
												
												<span className={`font-semibold text-sm tracking-wider transition-colors duration-300 ${
													index % 4 === 0 ? 'text-indigo-700 group-hover:text-indigo-800' :
													index % 4 === 1 ? 'text-purple-700 group-hover:text-purple-800' :
													index % 4 === 2 ? 'text-pink-700 group-hover:text-pink-800' :
													'text-blue-700 group-hover:text-blue-800'
												}`}>
													{item}
												</span>
											</div>
										</li>
									</Link>
								))}
							</ul>
						)}
					</nav>
				</div>
			</Container>
			
			{/* Bottom gradient line */}
			<div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"></div>
		</header>
	)
}