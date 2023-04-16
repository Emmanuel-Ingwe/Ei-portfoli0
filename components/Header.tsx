import React from "react";
import Link from "next/link";

import { SocialIcon } from "react-social-icons";
import { type } from "os";

type Props = {};

type img = { string: any };

export default function Header({}: Props) {
	return (
		<header className='top-5 items-center justify-between'>
			<div className='flex items-center'>
				<img src='/logo.png' alt='' />
			</div>

			<nav className='mt-32 bg-gray-800 border-emerald-950 p-16'>
				<div className='flex'>
					<ul className='flex w-full justify-between text-3xl font-bold text-gray-400'>
						<li className='pl-28'>About</li>
						<li className=''>Projects</li>
						<li className=''>Blog</li>
						<li className='pr-28'>Contact Me</li>
					</ul>
				</div>
			</nav>
			<div className='bg-gray-700 h-1'></div>
		</header>
	);
}
