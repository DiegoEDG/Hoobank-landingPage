import React, { useState } from 'react';
import { logo, close, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<nav className="w-full flex py-6 justify-between items-center navbar">
			<img src={logo} className="w-[124px] h-[32px]" alt="hoobank logo" />
			<ul className="list-none sm:flex hidden justify-end items-center flex-1 font-normal">
				{navLinks.map((nav, idx) => (
					<li
						key={nav.id}
						className={`font.poppins cursor-pointer text-[16px] ${idx === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
					>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>
				))}
			</ul>
			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggleMenu ? close : menu}
					alt="menu"
					className="w-[28px] h-[28px] object-contain"
					onClick={() => setToggleMenu((prev) => !prev)}
				/>
				<div
					className={`${
						toggleMenu ? 'flex' : 'hidden'
					} p-6 bg-black-gradient absolute top-12 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
				>
					<ul className="list-none flex flex-col justify-end items-center flex-1">
						{navLinks.map((nav, idx) => (
							<li
								key={nav.id}
								className={`font.poppins font-normal cursor-pointer text-[16px] ${
									idx === navLinks.length - 1 ? 'mb-0' : 'mb-5'
								}`}
							>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
