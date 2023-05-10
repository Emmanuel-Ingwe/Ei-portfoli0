import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Header from "../Header";

type Props = {};

function index({}: Props) {
	return (
		<div className='gradient-01 h-screen w-full overflow-y-scroll scrollbar-track-gray-700/20 scrollbar-thumb-red-950 scrollbar-thin'>
			<Head>
				<title>E.i | About me</title>
			</Head>

			<Header />

			<div className='container overflow-hidden flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
				<h3 className='absolute top-6 uppercase tracking-[20px] text-gray-500 text-2xl'>
					About
				</h3>
				<motion.img
					initial={{
						x: -200,
					}}
					transition={{
						duration: 0.7,
					}}
					whileInView={{ x: 0 }}
					viewport={{ once: true }}
					src='about-img.jpg'
					// width='380px'
					className='top-40 rounded-[20%] -mb-32 w-60 h-64 md:mb-0 flex-shrink-0 object-cover md:w-[300px] md:h-96 xl:w-[340px] xl:h-[440px] xl:rounded-2xl sm:w-[200px] sm:h-[200px]'
				/>
				<div className='space-y-10 px-0 md:px-10 pt-20'>
					<h4 className='text-3xl font text-red-900 sm:text-4xl'>
						A little info about{" "}
						<span className='underline decoration-slate-800'>me</span> {""}{" "}
					</h4>
					<motion.p
						initial={{
							y: 200,
						}}
						transition={{
							duration: 0.5,
						}}
						whileInView={{ y: 0 }}
						viewport={{ once: true }}
						className='text-base text-gray-500'>
						I'm Emmanuel, a Frontend Developer, I am passionate about using
						codes to create helpful projects and solving problems, I like being
						productive with my time. I build good and swift web applications
						that help individuals, businesses & brands satisfy their customers
						and compete globally. I’ve always been obsessed with technology and
						I plan on working with more advanced & modernised technologies in
						future.
					</motion.p>
				</div>
			</div>
		</div>
	);
}

export default index;
