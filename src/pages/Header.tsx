import React from "react";
import Link from "next/link";

import { SocialIcon } from "react-social-icons";

type Props = {};

// type img = { string: any };

export default function Header({}: Props) {
	return (
		<header className='top-5 items-center'>
			<div className='flex items-center justify-center relative top-28'>
				<Link href='/'>
					<img src='/logo.png' alt='' width='100px' className='rounded-full' />
				</Link>
			</div>

			<nav className='mt-20 bg-gray-800 border-emerald-950 p-10'>
				<div className='flex'>
					<ul className='flex flex-wrap w-full items-center justify-around text-1xl font-semi-bold text-gray-400 sm:text-2xl md:font-bold space-x-2'>
						<li className=' hover:text-gray-500 hover:tracking-[0.5px] transition-all duration-500'>
							<Link href='/About'>
								About <small className='font-extralight text-xs'>me</small>
							</Link>
						</li>
						<li className=' hover:text-gray-500 hover:tracking-[0.5px] transition-all duration-500 '>
							<Link href='/'>Projects</Link>
						</li>
						<li className=' hover:text-gray-500 text-sm hover:tracking-[0.5px] transition-all duration-500'>
							<Link href='/'>\home</Link>
						</li>
						<li className=' hover:text-gray-500 hover:tracking-[0.5px] transition-all duration-500'>
							<Link href='/Contact'>
								Contact <small className='text-xs font-extralight'>me</small>
							</Link>
						</li>
						<li className=' hover:text-gray-500 hover:tracking-[0.5px] transition-all duration-500'>
							<Link href='/Stacks'>
								<span className='hover:text-red-800 font-extralight'>/</span>{" "}
								Stacks
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<div className='bg-gray-700 h-1'></div>
		</header>
	);
}
