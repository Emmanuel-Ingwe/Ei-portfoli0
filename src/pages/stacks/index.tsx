import React from "react";
import Head from "next/head";
import Header from "../Header";
import { motion } from "framer-motion";
import Footer from "../Footer";

type Props = {
	directionLeft?: boolean;
};

function Stacks({ directionLeft }: Props) {
	return (
		<div>
			<div className='gradient-01 h-screen w-full text-gray-400 snap-y snap-madatory overflow-x-hidden  scrollbar-track-gray-700/20 scrollbar-thumb-red-950 scrollbar-thin z-0'>
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

					<div className='grid grid-cols-2 gap-7 sm:grid-cols-4 xl:grid-cols-6 items-center justify-center md:mt-28 md:mb-0 mb-16 xl:mb-20'>
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
								className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
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
								src='firebase.jpg'
								alt=''
								className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter grayscale group-hover:grayscale-0 transition duration-300 ease-in-out'
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
								src='redux.jpg'
								alt=''
								className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
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
								src='sanity.jpg'
								alt=''
								className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter grayscale group-hover:grayscale-0 transition duration-300 ease-in-out'
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
								src='sass.jpg'
								alt=''
								className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
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
								src='figma.jpg'
								alt=''
								className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter grayscale group-hover:grayscale-0 transition duration-300 ease-in-out'
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
								src='next.jpg'
								alt=''
								className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
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
								src='react.jpg'
								alt=''
								className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
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
								src='git.jpg'
								alt=''
								className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter grayscale group-hover:grayscale-0 transition duration-300 ease-in-out'
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
								src='bs.jpg'
								alt=''
								className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
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
								src='js.jpg'
								alt=''
								className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter transition duration-300 ease-in-out group-hover:grayscale'
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
								src='ts.jpg'
								alt=''
								className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter grayscale group-hover:grayscale-0 transition duration-300 ease-in-out'
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Stacks;
