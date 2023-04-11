import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
	return (
		<header className=' sticky top-5 items-center justify-between'>
			<div className='flex flex-row items-center'>
				<SocialIcon
					url='https://www.youtube.com/sonnysangha'
					fgColor='black'
					bgColor='transparent'
				/>
			</div>

			<nav className='w-full mt-16'>
				<ul>
					<li className='text-white'>About</li>
				</ul>
			</nav>
			<h1 className='text-3xl'>hhn3kerxnjg</h1>
		</header>
	);
}
