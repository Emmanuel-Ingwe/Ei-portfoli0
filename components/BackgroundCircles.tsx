import React from "react";
// import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
	return (
		<div className='relative flex justify-center items-center'>
			<div className='absolute border border-[indigo] rounded-full h-[200px] w-[200px] animate-ping' />
			<div className='absolute border border-[indigo] rounded-full h-[300px] w-[300px] animate-ping' />
			<div className='absolute border border-[indigo] rounded-full h-[500px] w-[500px] animate-ping' />
			<div className='rounded-full border border-[gray] opacity-20 h-[650px] w-[650px]' />
			<div className='absolute border border-[indigo] rounded-full h-[700px] w-[700px]' />
		</div>
	);
}

export default BackgroundCircles;
