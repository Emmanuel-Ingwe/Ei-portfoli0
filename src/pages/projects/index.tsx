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

				<article className='flex flex-col items-center justify-center'>
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

					<div className=''>
						<h4>Disney Clone</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Quibusdam, qui.
						</p>
					</div>
				</article>
				<article className='flex flex-col items-center justify-center'>
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

					<div className=''>
						<h4>Disney Clone</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Quibusdam, qui.
						</p>
					</div>
				</article>
				<article className='flex flex-col items-center justify-center'>
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

					<div className=''>
						<h4>Disney Clone</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Quibusdam, qui.
						</p>
					</div>
				</article>
				<article className='flex flex-col items-center justify-center'>
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

					<div className=''>
						<h4>Disney Clone</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Quibusdam, qui.
						</p>
					</div>
				</article>
				<article className='flex flex-col items-center justify-center'>
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

					<div className=''>
						<h4>Disney Clone</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Quibusdam, qui.
						</p>
					</div>
				</article>
				<article className='flex flex-col items-center justify-center'>
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

					<div className=''>
						<h4>Disney Clone</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Quibusdam, qui.
						</p>
					</div>
				</article>
			</div>
		</div>
	);
}

export default index;
