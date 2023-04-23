import React from "react";
import Link from "next/link";

import { SocialIcon } from "react-social-icons";
import { type } from "os";

type Props = {};

type img = { string: any };

export default function Header({}: Props) {
	return (
		<header className='top-5 items-center justify-between'>
			<div className='flex items-center justify-center relative top-28'>
				<img src='/logo.png' alt='' width='100px' className='rounded-full' />
			</div>

			<nav className='mt-20 bg-gray-800 border-emerald-950 p-10'>
				<div className='flex'>
					<ul className='flex w-full justify-between text-3xl font-semi-bold text-gray-400'>
						<li className='pl-28'>
							<Link href='/'>
								About <small className='text-sm font-extralight'>me</small>
							</Link>
						</li>
						<li className=''>
							<Link href='/'>Projects</Link>
						</li>
						<li className=''>
							<Link href='/'>Blog</Link>
						</li>
						<li className='pr-28'>
							<Link href='/'>
								Contact <small className='text-sm'>me</small>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<div className='bg-gray-700 h-1'></div>
		</header>
	);
}
