import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
	return (
		<header className='top-5 items-center justify-between'>
			<div className='flex flex-row items-center'>
				{/* <SocialIcon
					url='https://www.youtube.com/sonnysangha'
					fgColor='black'
					bgColor='transparent'
				/> */}
			</div>

			<nav className='mt-32 p-16 bg-red-500'>
				<div className='flex items-center justify-between'>
					<ul className='flex'>
						<li className='text-white'>About</li>
						<li className='text-white'>Projects</li>
						<li className='text-white'>Blog</li>
						<li className='text-white'>Contact Me</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
