'use client';

import React from 'react'; 
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from 'components/ui/sheet';
import { Button, buttonVariants } from 'components/ui/button';
import { MenuToggle } from 'components/ui/menu-toggle';

export function SimpleHeader() {
	const [open, setOpen] = React.useState(false);
	const [dataDropdownOpen, setDataDropdownOpen] = React.useState(false);

	const dataLinks = [
		{
			label: 'Vietnam Import Data',
			href: '/vietnam-import-data',
			description: 'Access comprehensive import trade data'
		},
		{
			label: 'Vietnam Export Data',
			href: '/vietnam-export-data',
			description: 'Explore detailed export statistics'
		},
	];

	return (
		<header className="bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-lg">
			<nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4">
				<Link href="/" className="flex items-center gap-2">
					<Image 
						src="/images/eg-logo.png" 
						alt="VietnamTradeData Logo" 
						width={180} 
						height={40}
						className="h-8 w-auto"
						priority
					/>
				</Link>
				<div className="hidden items-center gap-2 lg:flex">
					<Link
						className={buttonVariants({ variant: 'ghost' })}
						href="/about-us"
					>
						About Us
					</Link>
					
					{/* Data Dropdown */}
					<div 
						className="relative"
						onMouseEnter={() => setDataDropdownOpen(true)}
						onMouseLeave={() => setDataDropdownOpen(false)}
					>
						<button
							className={buttonVariants({ variant: 'ghost' }) + ' flex items-center gap-1'}
						>
							Data
							<ChevronDown className={`w-4 h-4 transition-transform ${dataDropdownOpen ? 'rotate-180' : ''}`} />
						</button>
						
						{dataDropdownOpen && (
							<div className="absolute top-full left-0 pt-2 w-72 z-50">
								<div className="bg-white rounded-lg shadow-xl border border-slate-200 py-2">
									{dataLinks.map((link, index) => (
										<Link
											key={index}
											href={link.href}
											className="block px-4 py-3 hover:bg-slate-50 transition-colors"
											onClick={() => setDataDropdownOpen(false)}
										>
											<div className="font-medium text-slate-900">{link.label}</div>
											<div className="text-xs text-slate-500 mt-0.5">{link.description}</div>
										</Link>
									))}
								</div>
							</div>
						)}
					</div>
					<Link
						className={buttonVariants({ variant: 'ghost' })}
						href="/pricing"
					>
						Pricing
					</Link>
					
					<Link
						className={buttonVariants({ variant: 'ghost' })}
						href="/search-live-data"
					>
						Search Live Data
					</Link>
					
					<Button variant="outline" asChild>
						<Link href="/contact-us">Login</Link>
					</Button>
					<Button className="tt-cta-gradient text-white px-4 py-2 rounded" variant="outline">
						<Link href="/contact-us">Schedule a Demo</Link>
					</Button>
				</div>
				<Sheet open={open} onOpenChange={setOpen}>
					<Button size="icon" variant="outline" className="lg:hidden">
						<MenuToggle
							strokeWidth={2.5}
							open={open}
							onOpenChange={setOpen}
							className="size-6"
						/>
					</Button>
					<SheetContent
						className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
						showClose={false}
						side="left"
					>
						<div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
							<Link
								className={buttonVariants({
									variant: 'ghost',
									className: 'justify-start',
								})}
								href="/about-us"
							>
								About Us
							</Link>
							
							{/* Mobile Data Links */}
							<div className="border-t border-slate-200 pt-2 mt-2">
								<div className="px-3 py-2 text-sm font-semibold text-slate-500">Data</div>
								{dataLinks.map((link, index) => (
									<Link
										key={index}
										className={buttonVariants({
											variant: 'ghost',
											className: 'justify-start pl-6',
										})}
										href={link.href}
									>
										{link.label}
									</Link>
								))}
							</div>
							
							<Link
								className={buttonVariants({
									variant: 'ghost',
									className: 'justify-start',
								})}
								href="/pricing"
							>
								Pricing
							</Link>
							
							<Link
								className={buttonVariants({
									variant: 'ghost',
									className: 'justify-start',
								})}
								href="/search-live-data"
							>
								Search Live Data
							</Link>
						</div>
						<SheetFooter>
							<Button variant="outline" asChild>
								<Link href="/contact-us">Login</Link>
							</Button>
							<Button asChild>
								<Link href="/contact-us">Schedule a Demo</Link>
							</Button>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</nav>
		</header>
	);
}
