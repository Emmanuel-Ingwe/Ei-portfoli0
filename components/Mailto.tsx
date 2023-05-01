import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

type Props = {};

function Mailto() {
	const socialLinks = [
		{
			name: "send Email",
			icon: <FiMail />,
			link: "mailto:ingwemmanuel@gmail.com",
		},
	];
	return (
		<motion.div
			className='fixed top-7 right-7 md:bottom-0 md:right-24 xl:bottom-0 xl:right-24 sm:bottom-0 sm:right-16 sm:translate-y-3/4'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 0.3,
				ease: "easeInOut",
				delay: 1.95,
			}}>
			<ul className='flex flex-col gap-5'>
				{socialLinks.map(({ name, icon, link }) => (
					<li
						key={name}
						title={name}
						className='hover:animate-pulse animate-ping'>
						<Link href={link} className='' target='_blank'>
							{icon}
						</Link>
					</li>
				))}
			</ul>
		</motion.div>
	);
}
export default Mailto;
