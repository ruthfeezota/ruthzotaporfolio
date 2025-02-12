import React from 'react'


function Nav() {
  return (
    <header>
				<nav className="bg-[#E0DFDD] text-black questrial-regular">
					<div className="container mx-auto px-4 py-6 flex justify-between items-center">
						<div className="flex flex-1 justify-between text-[22px] pl-10 font-regular">
							<a
								href="/"
								className="px-4 max-w-56 py-2 hover:[border-bottom:1px_solid_rgb(0,17,0)] sm:text-[20px] text-[14px]"
							>
								Home
							</a>
							<a
								href="/about"
								className="px-4 py-2 max-w-56 hover:[border-bottom:1px_solid_rgb(0,17,0)] sm:text-[20px] text-[14px]"
							>
								Current Freelance UX Engineer
							</a>
							<a
								href="/about"
								className="px-4 py-2 max-w-56 hover:[border-bottom:1px_solid_rgb(0,17,0)] sm:text-[20px] text-[14px]"
							>
								Based in Austin United States
							</a>
							<a
								href="/portfolio"
								className="px-4 py-2 max-w-56 hover:[border-bottom:1px_solid_rgb(0,17,0)] sm:text-[20px] text-[14px]"
							>
								Portfolio
							</a>
						</div>
					</div>
				</nav>
			</header>
  )
}

export default Nav