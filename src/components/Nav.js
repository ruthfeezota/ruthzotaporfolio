import React from 'react'


function Nav() {
  return (
    <header>
				<nav className="bg-[#CBC7C1] text-black questrial-regular">
					<div className="container mx-auto px-4 py-6 flex justify-between items-center">
						<div className="flex flex-1 justify-between text-[22px] pl-10 font-bold">
							<a
								href="/"
								className="px-4 max-w-56 py-2 hover:[border-bottom:1px_solid_rgb(0,17,0)]"
							>
								Ruth Zota
							</a>
							<a
								href="/about"
								className="px-4 py-2 max-w-56 hover:[border-bottom:1px_solid_rgb(0,17,0)]"
							>
								Current ux engineer at John Hopkins
							</a>
							<a
								href="/services"
								className="px-4 py-2 max-w-56 hover:[border-bottom:1px_solid_rgb(0,17,0)]"
							>
								Based in Austin United States
							</a>
							<a
								href="/contact"
								className="px-4 py-2 max-w-56 hover:[border-bottom:1px_solid_rgb(0,17,0)]"
							>
								Work, About, Contact
							</a>
						</div>
					</div>
				</nav>
			</header>
  )
}

export default Nav