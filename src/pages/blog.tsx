import ArticleCardMedium from '@/components/shared/article-card/article-card-medium'
import { Container } from '@/components/shared/container'
import { useGetArticles } from '@/hooks/useArticles'
import { X } from 'lucide-react'
import { Link, useSearchParams } from 'react-router'

export function BlogPage() {
	const [searchParams] = useSearchParams()
	const type = searchParams.get('type') || ''
	const { data: articles = [], isLoading, isError } = useGetArticles()

	if (isLoading) {
		return (
			<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
				<Container>
					<section className="relative py-20 overflow-hidden">
						{/* Background decorative elements */}
						<div className="absolute inset-0">
							<div className="absolute top-20 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
							<div className="absolute bottom-40 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
							<div className="absolute top-1/2 right-20 w-4 h-4 border-2 border-pink-300 rounded-full animate-bounce"></div>
						</div>

						<div className="relative z-10">
							{/* Header */}
							<div className="text-center mb-16">
								<div className="inline-flex items-center justify-center mb-6">
									<div className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-full border border-indigo-100 shadow-lg">
										<div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
										<span className="text-indigo-700 font-bold text-sm uppercase tracking-wider">Loading Articles</span>
									</div>
								</div>
								
								<h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
									Grammar
									<span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
										Collection
									</span>
								</h1>
							</div>

							{/* Loading skeleton */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
								{[...Array(6)].map((_, index) => (
									<div key={index} className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 animate-pulse">
										<div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl mb-4"></div>
										<div className="space-y-3">
											<div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full"></div>
											<div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-3/4"></div>
											<div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-1/2"></div>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
				</Container>
			</div>
		)
	}

	if (isError) {
		return (
			<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
				<Container>
					<section className="relative py-20 overflow-hidden">
						{/* Background decorative elements */}
						<div className="absolute inset-0">
							<div className="absolute top-20 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
							<div className="absolute bottom-40 right-1/3 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
						</div>

						<div className="relative z-10 text-center">
							<div className="inline-flex items-center justify-center mb-6">
								<div className="flex items-center px-6 py-3 bg-gradient-to-r from-red-50 via-orange-50 to-pink-50 rounded-full border border-red-100 shadow-lg">
									<div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mr-3 animate-pulse"></div>
									<span className="text-red-700 font-bold text-sm uppercase tracking-wider">Error Loading</span>
								</div>
							</div>
							
							<h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
								Something went
								<span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
									Wrong
								</span>
							</h1>
							
							<p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
								We couldn't load the grammar articles. Please refresh the page and try again.
							</p>

							<button 
								onClick={() => window.location.reload()} 
								className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-800 hover:scale-105"
							>
								Try Again
							</button>
						</div>
					</section>
				</Container>
			</div>
		)
	}

	const filteredArticles = type
		? articles?.filter(article => article.type === type)
		: articles

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
			<Container>
				<section className="relative py-20 overflow-hidden">
					{/* Background decorative elements */}
					<div className="absolute inset-0">
						<div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
						<div className="absolute top-20 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
						<div className="absolute bottom-40 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
						<div className="absolute top-1/2 right-20 w-4 h-4 border-2 border-pink-300 rounded-full animate-bounce"></div>
						
						{/* Large decorative circles */}
						<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-20"></div>
						<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full opacity-15"></div>
					</div>

					<div className="relative z-10">
						{/* Header Section */}
						<div className="text-center mb-16">
							<div className="inline-flex items-center justify-center mb-8">
								<div className="flex items-center px-8 py-3 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-full border border-indigo-100 shadow-lg">
									<div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
									<span className="text-indigo-700 font-bold text-sm uppercase tracking-wider">Grammar Blog</span>
									<div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ml-3 animate-pulse" style={{animationDelay: '1s'}}></div>
								</div>
							</div>
							
							<h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
								Grammar
								<span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
									Collection
								</span>
							</h1>
							
							<p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
								Explore our curated collection of grammar wisdom, writing techniques, and linguistic mastery guides.
							</p>
						</div>

						{/* Filter section */}
						{type && (
							<div className="mb-12">
								<div className="max-w-4xl mx-auto">
									<div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
										<div className="flex flex-col md:flex-row items-start md:items-center gap-4">
											<div className="flex items-center">
												<span className="text-gray-600 mr-3">Filtering by:</span>
												<div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full border border-indigo-200">
													<div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
													<span className="font-bold text-indigo-700 text-sm uppercase tracking-wider" style={{overflowWrap: "anywhere"}}>
														{type}
													</span>
												</div>
											</div>
											<Link 
												to='/blog'
												className="group inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-300"
											>
												<X className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" strokeWidth={1.5} />
												<span className="text-sm font-medium text-gray-700">Clear Filter</span>
											</Link>
										</div>
									</div>
								</div>
							</div>
						)}

						{/* Articles Grid */}
						{!!filteredArticles && filteredArticles.length > 0 ? (
							<div className="relative">
								{/* Background for articles */}
								<div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-[3rem] shadow-2xl transform rotate-1"></div>
								
								<div className="relative bg-white rounded-[3rem] shadow-xl border border-gray-100 p-8 md:p-12">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
										{filteredArticles?.map((article, index) => (
											<div 
												key={article.id}
												className="group relative"
												style={{
													animationDelay: `${index * 100}ms`,
													animation: 'slideInUp 0.6s ease-out forwards'
												}}
											>
												{/* Hover glow effect */}
												<div className={`absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
													index % 3 === 0 ? 'bg-gradient-to-r from-indigo-200 to-purple-200' :
													index % 3 === 1 ? 'bg-gradient-to-r from-purple-200 to-pink-200' :
													'bg-gradient-to-r from-pink-200 to-red-200'
												}`}></div>
												
												<div className="relative group-hover:scale-105 transition-transform duration-300">
													<ArticleCardMedium article={article} />
												</div>
											</div>
										))}
									</div>
									
									{/* Decorative elements inside the container */}
									<div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-60"></div>
									<div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-tl from-purple-100 to-pink-100 rounded-full opacity-40"></div>
								</div>
							</div>
						) : (
							<div className="text-center py-16">
								<div className="max-w-2xl mx-auto">
									<div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
										<span className="text-4xl">📝</span>
									</div>
									<h3 className="text-2xl font-bold text-gray-900 mb-4">
										No Articles Found
									</h3>
									<p className="text-gray-600 mb-8">
										{type ? `No articles found for "${type}" category.` : 'No articles available at the moment.'}
									</p>
									{type && (
										<Link 
											to='/blog'
											className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-800 hover:scale-105"
										>
											View All Articles
										</Link>
									)}
								</div>
							</div>
						)}

						{/* Bottom decorative section */}
						<div className="mt-16 text-center">
							<div className="inline-flex items-center space-x-4 text-gray-400">
								<div className="flex space-x-1">
									{[...Array(5)].map((_, i) => (
										<div key={i} className="w-2 h-2 bg-indigo-200 rounded-full animate-pulse" style={{animationDelay: `${i * 200}ms`}}></div>
									))}
								</div>
								<span className="text-sm font-medium">Crafted with linguistic precision</span>
								<div className="flex space-x-1">
									{[...Array(5)].map((_, i) => (
										<div key={i} className="w-2 h-2 bg-purple-200 rounded-full animate-pulse" style={{animationDelay: `${i * 200 + 1000}ms`}}></div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>
			</Container>

			<style>{`
				@keyframes slideInUp {
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