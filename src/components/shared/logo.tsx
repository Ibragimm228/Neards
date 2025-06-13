import { cn } from '@/lib/utils'
import { BookOpen, Feather } from 'lucide-react'
import { Link } from 'react-router'

export function Logo({ variant = 'dark' }: { variant?: 'light' | 'dark' }) {
	return (
		<Link to='/' className='group flex items-center gap-4 no-underline'>
			{/* Logo Icon - Stacked books with feather */}
			<div className="relative flex items-center justify-center">
				{/* Animated background glow */}
				<div className="absolute inset-0 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg scale-150"></div>
				
				{/* Main icon container */}
				<div className="relative w-14 h-14 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
					{/* Books base */}
					<div className="relative">
						<BookOpen 
							size={24} 
							className='text-white relative z-10' 
						/>
						{/* Decorative feather overlay */}
						<Feather 
							size={14} 
							className='absolute -top-1 -right-1 text-yellow-200 opacity-90 transform rotate-12' 
						/>
					</div>
				</div>
				
				{/* Floating dots animation */}
				<div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-80"></div>
				<div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
			</div>
			
			{/* Brand Text */}
			<div className="flex flex-col">
				{/* Main brand name */}
				<div className="flex items-center gap-1">
					<span
						className={cn(
							'text-3xl font-black leading-none tracking-tight transition-all duration-300',
							variant === 'dark' 
								? 'text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-pink-600' 
								: 'text-white group-hover:text-yellow-100'
						)}
					>
						Grammar
					</span>
					<span
						className={cn(
							'text-3xl font-black leading-none tracking-tight transition-all duration-300',
							variant === 'dark' 
								? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600' 
								: 'text-yellow-200'
						)}
					>
						Nerd
					</span>
				</div>
				
				{/* Subtitle */}
				<div className="flex items-center gap-2 mt-1">
					<div className={cn(
						'h-px w-8 transition-all duration-300',
						variant === 'dark' 
							? 'bg-gradient-to-r from-gray-300 to-purple-300 group-hover:from-indigo-400 group-hover:to-pink-400' 
							: 'bg-gradient-to-r from-white/40 to-yellow-200/60'
					)}></div>
					<span
						className={cn(
							'text-sm font-medium tracking-widest uppercase transition-colors duration-300',
							variant === 'dark' 
								? 'text-gray-600 group-hover:text-gray-700' 
								: 'text-white/80 group-hover:text-white'
						)}
					>
						Life
					</span>
					<div className={cn(
						'h-px w-8 transition-all duration-300',
						variant === 'dark' 
							? 'bg-gradient-to-r from-purple-300 to-gray-300 group-hover:from-pink-400 group-hover:to-indigo-400' 
							: 'bg-gradient-to-r from-yellow-200/60 to-white/40'
					)}></div>
				</div>
			</div>
			
			{/* Decorative elements */}
			<div className="absolute -top-2 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
				<div className="flex space-x-1">
					<div className="w-1 h-1 bg-indigo-400 rounded-full animate-ping"></div>
					<div className="w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '200ms'}}></div>
					<div className="w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '400ms'}}></div>
				</div>
			</div>
		</Link>
	)
}