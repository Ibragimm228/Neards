import {
	ArticleComments,
	ArticleContent,
	ArticleFeatured,
	ArticleHeader,
	ArticleLatest,
	ArticleNavigation,
	ArticlePopular,
} from '@/components/article'
import { Container } from '@/components/shared/container'
import { Loading } from '@/components/ui/loading'
import { useGetArticleBySlug, useGetArticles } from '@/hooks/useArticles'
import { useParams } from 'react-router'

export function ArticlePage() {
	const { slug } = useParams()

	const { data: article, isLoading: isArticleLoading } = useGetArticleBySlug(
		slug || ''
	)
	const { data: articles, isLoading: isArticlesLoading } = useGetArticles()

	if (isArticleLoading || isArticlesLoading) {
		return (
			<div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
				{/* Background decorative elements */}
				<div className="absolute inset-0">
					<div className="absolute top-20 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
					<div className="absolute bottom-40 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
					<div className="absolute top-1/2 right-20 w-4 h-4 border-2 border-pink-300 rounded-full animate-bounce"></div>
				</div>
				
				<Container>
					<div className="relative z-10 flex items-center justify-center min-h-screen">
						<div className="text-center space-y-8">
							{/* Premium loading card */}
							<div className="relative bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-16">
								<div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-60"></div>
								<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl from-purple-100 to-pink-100 rounded-full opacity-40"></div>
								
								<div className="relative z-10">
									<div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mx-auto mb-6 animate-pulse"></div>
									<h2 className="text-2xl font-bold text-gray-900 mb-4">Loading Premium Content</h2>
									<p className="text-gray-600 mb-8">Preparing your grammar insights...</p>
									<Loading />
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		)
	}

	if (!article) return null

	return (
		<div className="relative min-h-screen bg-white overflow-hidden">
			{/* Background patterns and decorative elements */}
			<div className="absolute inset-0">
				{/* Subtle grid pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
				
				{/* Floating geometric shapes */}
				<div className="absolute top-32 left-1/6 w-3 h-3 bg-indigo-300 transform rotate-45 animate-pulse"></div>
				<div className="absolute bottom-40 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
				<div className="absolute top-2/3 left-12 w-4 h-4 border border-pink-300 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
				
				{/* Large decorative circles */}
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full opacity-30"></div>
				<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-50 to-pink-50 rounded-full opacity-20"></div>
			</div>

			<Container>
				<div className="relative z-10 py-16 md:py-24">
					{/* Enhanced Article Header */}
					<div className="relative mb-16">
						<div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-[3rem] shadow-xl transform rotate-1"></div>
						<div className="relative bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-8 md:p-12">
							<ArticleHeader article={article} />
						</div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
						{/* Left Column - Article Content */}
						<div className="lg:col-span-8 space-y-12">
							{/* Navigation with premium styling */}
							<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 rounded-2xl"></div>
								<div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
									<ArticleNavigation currentArticle={article} articles={articles} />
								</div>
							</div>

							{/* Article Content with enhanced styling */}
							<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-white rounded-[2rem] shadow-xl transform -rotate-1"></div>
								<div className="relative bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-8 md:p-12">
									{/* Decorative elements */}
									<div className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-60"></div>
									<div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-tl from-purple-100 to-pink-100 rounded-full opacity-40"></div>
									
									<div className="relative z-10">
										<ArticleContent article={article} />
									</div>
								</div>
							</div>
						</div>

						{/* Right Column - Sidebar */}
						<div className="lg:col-span-4 space-y-8">
							{/* Comments Section */}
							<div className="group relative">
								<div className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-indigo-200 to-purple-200"></div>
								<div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-6 group-hover:shadow-2xl transition-shadow duration-300">
									{/* Header badge */}
									<div className="flex items-center mb-6">
										<div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
										<span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Discussion</span>
									</div>
									<ArticleComments article={article} />
								</div>
							</div>

							{/* Latest Articles */}
							<div className="group relative">
								<div className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-purple-200 to-pink-200"></div>
								<div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-6 group-hover:shadow-2xl transition-shadow duration-300">
									{/* Header badge */}
									<div className="flex items-center mb-6">
										<div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></div>
										<span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Latest Insights</span>
									</div>
									<ArticleLatest articles={articles} />
								</div>
							</div>

							{/* Popular Articles */}
							<div className="group relative">
								<div className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-pink-200 to-red-200"></div>
								<div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-6 group-hover:shadow-2xl transition-shadow duration-300">
									{/* Header badge */}
									<div className="flex items-center mb-6">
										<div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mr-3 animate-pulse"></div>
										<span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Most Popular</span>
									</div>
									<ArticlePopular articles={articles} />
								</div>
							</div>

							{/* Featured Articles */}
							<div className="group relative">
								<div className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-blue-200 to-indigo-200"></div>
								<div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-6 group-hover:shadow-2xl transition-shadow duration-300">
									{/* Header badge with star */}
									<div className="flex items-center mb-6">
										<div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-3 animate-pulse"></div>
										<span className="text-sm font-bold text-gray-600 uppercase tracking-wider">⭐ Featured</span>
									</div>
									<ArticleFeatured articles={articles} />
								</div>
							</div>

							{/* Newsletter CTA */}
							<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl transform rotate-1"></div>
								<div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-gray-700 p-8 text-center">
									{/* Decorative elements */}
									<div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-30"></div>
									<div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-tl from-purple-400 to-pink-400 rounded-full opacity-20"></div>
									
									<div className="relative z-10">
										<h3 className="text-xl font-bold text-white mb-4">
											Join Our
											<span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
												Grammar Community
											</span>
										</h3>
										<p className="text-gray-300 text-sm mb-6">
											Get weekly insights and expert tips delivered to your inbox.
										</p>
										<a
											href="/contacts"
											className="group inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
										>
											Subscribe Now
											<svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom decorative section */}
					<div className="mt-20 text-center">
						<div className="inline-flex items-center space-x-4 text-gray-400">
							<div className="flex space-x-1">
								{[...Array(3)].map((_, i) => (
									<div key={i} className={`w-2 h-2 rounded-full animate-pulse ${
										i === 0 ? 'bg-indigo-300' : i === 1 ? 'bg-purple-300' : 'bg-pink-300'
									}`} style={{animationDelay: `${i * 300}ms`}}></div>
								))}
							</div>
							<span className="text-sm font-medium">A Grammar Nerd's Life</span>
							<div className="flex space-x-1">
								{[...Array(3)].map((_, i) => (
									<div key={i} className={`w-2 h-2 rounded-full animate-pulse ${
										i === 0 ? 'bg-pink-300' : i === 1 ? 'bg-purple-300' : 'bg-indigo-300'
									}`} style={{animationDelay: `${i * 300 + 1000}ms`}}></div>
								))}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}