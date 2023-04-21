import Link from "next/link";
import React from "react";
import {
	FiGithub,
	FiInstagram,
	FiYoutube,
	FiLinkedin,
	FiTwitter,
} from "react-icons/fi";
import { motion } from "framer-motion";

function SocialIcons() {
	const socialLinks = [
		{
			name: "Github",
			icon: <FiGithub />,
			link: "https://github.com/Emmanuel-ingwe",
		},
		{
			name: "LinkedIn",
			icon: <FiLinkedin />,
			link: "https://www.linkedin.com/in/emmanuel-ingwe-836961216/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BsdP5gaZuTFG7Q6zuH6ykqA%3D%3D",
		},
		// {
		// 	name: "Instagram",
		// 	icon: <FiInstagram />,
		// 	link: "https://instagram.com/",
		// },
		{
			name: "Twitter",
			icon: <FiTwitter />,
			link: "https://twitter.com/ingwe_emmanuel",
		},
	];
	return (
		<motion.div
			className='fixed bottom-0 left-20 '
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

export default SocialIcons;
