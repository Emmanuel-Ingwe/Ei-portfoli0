import React from "react";
import Head from "next/head";
import Header from "../Header";
import { motion } from "framer-motion";

type Props = {};

function index({}: Props) {
	return (
		<div className='gradient-01 h-full w-full text-gray-400 snap-y snap-madatory overflow-hidde z-0'>
			<Head>
				<title>E.i | my Projects</title>
			</Head>

			<Header />

			<div className='container flex flex-col items-center justify-center'>
				<h3 className='uppercase tracking-[20px] text-gray-500 text-2xl m-10'>
					Projects
				</h3>

				<div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
					<article className='flex flex-col items-center justify-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#161335]'>
						<motion.img
							initial={{
								y: -100,
								opacity: 0,
							}}
							transition={{
								duration: 1.2,
							}}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							src='disney-big.jpg'
							alt=''
							className='h-52 w-64 rounded-2xl xl:w-[200px] object-cover object-center'
						/>

						<div className='px-0 md:px-10'>
							<h4 className='text-4xl font-light'>Disney Clone</h4>
							<p className='font-bold text-2xl mt-1'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quibusdam, qui.
							</p>
						</div>
					</article>
					<article className='flex flex-col items-center justify-center  space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#161335]'>
						<motion.img
							initial={{
								y: -100,
								opacity: 0,
							}}
							transition={{
								duration: 1.2,
							}}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							src='hulu-big.jpg'
							alt=''
							className='h-52 w-64 rounded-2xl xl:w-[200px] object-cover object-center items-center justify-center'
						/>

						<div className='px-0 md:px-10'>
							<h4 className='text-4xl font-light'>Disney Clone</h4>
							<p className='font-bold text-2xl mt-1'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quibusdam, qui.
							</p>
						</div>
					</article>
					<article className='flex flex-col items-center justify-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px]  snap-center bg-[#161335]'>
						<motion.img
							initial={{
								y: -100,
								opacity: 0,
							}}
							transition={{
								duration: 1.2,
							}}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							src='disney-big.jpg'
							alt=''
							className='h-52 w-64 rounded-2xl xl:w-[200px] object-cover object-center'
						/>

						<div className='px-0 md:px-10'>
							<h4 className='text-4xl font-light'>Disney Clone</h4>
							<p className='font-bold text-2xl mt-1'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quibusdam, qui.
							</p>
						</div>
					</article>
					<article className='flex flex-col items-center justify-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#161335]'>
						<motion.img
							initial={{
								y: -100,
								opacity: 0,
							}}
							transition={{
								duration: 1.2,
							}}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							src='disney-big.jpg'
							alt=''
							className='h-52 w-64 rounded-2xl xl:w-[200px] object-cover object-center '
						/>

						<div className='px-0 md:px-10'>
							<h4 className='text-4xl font-light'>Disney Clone</h4>
							<p className='font-bold text-2xl mt-1'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quibusdam, qui.
							</p>
						</div>
					</article>
					<article className='flex flex-col items-center justify-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#161335]'>
						<motion.img
							initial={{
								y: -100,
								opacity: 0,
							}}
							transition={{
								duration: 1.2,
							}}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							src='disney-big.jpg'
							alt=''
							className='h-52 w-64 rounded-2xl xl:w-[200px] object-cover object-center items-center justify-center'
						/>

						<div className='px-0 md:px-10'>
							<h4 className='text-4xl font-light'>Disney Clone</h4>
							<p className='font-bold text-2xl mt-1'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quibusdam, qui.
							</p>
						</div>
					</article>
					<article className='flex flex-col items-center justify-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#161335]'>
						<motion.img
							initial={{
								y: -100,
								opacity: 0,
							}}
							transition={{
								duration: 1.2,
							}}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							src='disney-big.jpg'
							alt=''
							className='h-52 w-64 rounded-2xl xl:w-[200px] object-cover object-center'
						/>

						<div className='px-0 md:px-10'>
							<h4 className='text-4xl font-light'>Disney Clone</h4>
							<p className='font-bold text-2xl mt-1'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quibusdam, qui.
							</p>
						</div>
					</article>
				</div>
			</div>
		</div>
	);
}

export default index;
