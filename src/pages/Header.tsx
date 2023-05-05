import React from "react";
import Link from "next/link";

import { SocialIcon } from "react-social-icons";
import { type } from "os";

type Props = {};

type img = { string: any };

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
					<ul className='flex flex-wrap w-full items-center justify-around text-1xl font-semi-bold text-gray-400 sm:text-2xl md:font-bold'>
						<li className=' hover:text-gray-500 hover:tracking-[0.5px] transition-all duration-500'>
							<Link href='/About'>
								About <small className='text-sm font-extralight'>me</small>
							</Link>
						</li>
						<li className=' hover:text-gray-500 hover:tracking-[0.5px] transition-all duration-500 '>
							<Link href='/projects'>Projects</Link>
						</li>
						<li className=' hover:text-gray-500 hover:tracking-[0.5px] transition-all duration-500'>
							<Link href='/'>Blog</Link>
						</li>
						<li className=' hover:text-gray-500 hover:tracking-[0.5px] transition-all duration-500'>
							<Link href='/contact'>
								Contact <small className='text-sm font-extralight'>me</small>
							</Link>
						</li>
						<li className=' hover:text-gray-500 hover:tracking-[0.5px] transition-all duration-500'>
							<Link href='/stacks'>
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
