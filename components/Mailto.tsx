import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

type Props = {};

function Mailto() {
	const socialLinks = [
		{
			name: "Gmail",
			icon: <FiMail />,
			link: "mailto:ingwemmanuel@gmail.com",
		},
	];
	return (
		<motion.div
			className='fixed bottom right-20 '
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 0.3,
				ease: "easeInOut",
				delay: 1.95,
			}}>
			<ul className='flex flex-col gap-5 pb- ul'>
				{socialLinks.map(({ name, icon, link }) => (
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
export default Mailto;
