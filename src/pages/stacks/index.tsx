import React from "react";
import Head from "next/head";
import Header from "../Header";
import { motion } from "framer-motion";

type Props = {
	directionLeft?: boolean;
};

function stacks({ directionLeft }: Props) {
	return (
		<div className='gradient-01 h-full w-full text-gray-400 snap-y snap-madatory overflow-hidden z-0'>
			<Head>
				<title>E.i | my Projects</title>
			</Head>

			<Header />

			<div className='container flex flex-col items-center justify-center'>
				<motion.h3
					initial={{
						y: -100,
						opacity: 0,
					}}
					transition={{
						duration: 1.2,
					}}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='uppercase tracking-[20px] text-gray-500 text-2xl m-10'>
					Skills
				</motion.h3>

				<div className='flex flex-wrap items-center justify-center w-2/4 '>
					<div className='group relative flex cursor-pointer p-3'>
						<motion.img
							initial={{
								x: directionLeft ? -200 : 200,
								opacity: 0,
							}}
							transition={{
								duration: 1,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							src='tailwind.jpg'
							alt=''
							className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale'
						/>
					</div>
					<div className='group relative flex cursor-pointer'>
						<motion.img
							initial={{
								x: directionLeft ? -200 : 200,
								opacity: 0,
							}}
							transition={{
								duration: 1,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							src='tailwind.jpg'
							alt=''
							className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale'
						/>
					</div>
					<div className='group relative flex cursor-pointer p-3'>
						<motion.img
							initial={{
								x: directionLeft ? -200 : 200,
								opacity: 0,
							}}
							transition={{
								duration: 1,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							src='tailwind.jpg'
							alt=''
							className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale'
						/>
					</div>
					<div className='group relative flex cursor-pointer'>
						<motion.img
							initial={{
								x: directionLeft ? -200 : 200,
								opacity: 0,
							}}
							transition={{
								duration: 1,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							src='tailwind.jpg'
							alt=''
							className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale'
						/>
					</div>
					<div className='group relative flex cursor-pointer p-3'>
						<motion.img
							initial={{
								x: directionLeft ? -200 : 200,
								opacity: 0,
							}}
							transition={{
								duration: 1,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							src='tailwind.jpg'
							alt=''
							className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale'
						/>
					</div>
					<div className='group relative flex cursor-pointer'>
						<motion.img
							initial={{
								x: directionLeft ? -200 : 200,
								opacity: 0,
							}}
							transition={{
								duration: 1,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							src='tailwind.jpg'
							alt=''
							className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale'
						/>
					</div>
					<div className='group relative flex cursor-pointer p-3'>
						<motion.img
							initial={{
								x: directionLeft ? -200 : 200,
								opacity: 0,
							}}
							transition={{
								duration: 1,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							src='tailwind.jpg'
							alt=''
							className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale'
						/>
					</div>
					<div className='group relative flex cursor-pointer'>
						<motion.img
							initial={{
								x: directionLeft ? -200 : 200,
								opacity: 0,
							}}
							transition={{
								duration: 1,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							src='tailwind.jpg'
							alt=''
							className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale'
						/>
					</div>
					<div className='group relative flex cursor-pointer p-3'>
						<motion.img
							initial={{
								x: directionLeft ? -200 : 200,
								opacity: 0,
							}}
							transition={{
								duration: 1,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							src='tailwind.jpg'
							alt=''
							className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale'
						/>
					</div>
					<div className='group relative flex cursor-pointer'>
						<motion.img
							initial={{
								x: directionLeft ? -200 : 200,
								opacity: 0,
							}}
							transition={{
								duration: 1,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							src='tailwind.jpg'
							alt=''
							className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale'
						/>
					</div>
					<div className='group relative flex cursor-pointer p-3'>
						<motion.img
							initial={{
								x: directionLeft ? -200 : 200,
								opacity: 0,
							}}
							transition={{
								duration: 1,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							src='tailwind.jpg'
							alt=''
							className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale'
						/>
					</div>
					<div className='group relative flex cursor-pointer'>
						<motion.img
							initial={{
								x: directionLeft ? -200 : 200,
								opacity: 0,
							}}
							transition={{
								duration: 1,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							src='tailwind.jpg'
							alt=''
							className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default stacks;
