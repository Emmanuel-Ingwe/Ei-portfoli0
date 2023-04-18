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
			<div className='absolute border border-[indigo] rounded-full h-[200px] w-[200px] animate-ping' />
			<div className='absolute border border-[indigo] rounded-full h-[300px] w-[300px] animate-ping' />
			<div className='absolute border border-[indigo] rounded-full h-[500px] w-[500px] animate-ping' />
			<div className='rounded-full border border-[gray] opacity-20 h-[650px] w-[650px]' />
			<div className='absolute border border-[indigo] rounded-full h-[700px] w-[700px]' />
		</motion.div>
	);
}

export default BackgroundCircles;
