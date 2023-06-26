import Link from "next/link";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

type GitIcon = { link: string };

function GitIcon({ link }: GitIcon) {
	// console.log(link);
	const socialLinks = [
		{
			name: "Github",
			icon: <FiGithub />,
		},
	];

	return (
		<motion.div
			className=''
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 0.3,
				ease: "easeInOut",
				delay: 1.95,
			}}>
			<ul className=''>
				{socialLinks.map(({ name, icon }) => (
					<li key={name} title={name} className='hover:animate-bounce'>
						<Link href={link} className='' target='_blank'>
							{icon}
						</Link>
					</li>
				))}
			</ul>
		</motion.div>
	);
}

export default GitIcon;
