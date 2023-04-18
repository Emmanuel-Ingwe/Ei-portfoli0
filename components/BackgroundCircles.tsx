import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				scale: [1, 2, 2, 3, 1],
				opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
				borderRadius: ["20%", "20%", "50%", "80%", "20%"],
			}}
			transition={{
				duration: 2.5,
			}}
			className='relative flex justify-center items-center'>
			<div className='absolute border border-[indigo] rounded-full h-[70px] w-[70px] animate-ping' />
			<div className='absolute border border-[indigo] rounded-full h-[800px] w-[80px] animate-ping' />
			<div className='absolute border border-[indigo] rounded-full h-[100px] w-[100px] animate-ping' />
			<div className='rounded-full border border-[gray] opacity-20 h-[150px] w-[150px]' />
			<div className='absolute border border-[indigo] rounded-full h-[200px] w-[200px]' />
		</motion.div>
	);
}

export default BackgroundCircles;
