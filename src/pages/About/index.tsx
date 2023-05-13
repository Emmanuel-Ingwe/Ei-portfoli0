import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

type Props = {};

function index({}: Props) {
	return (
		<div className='gradient-01 h-screen w-full overflow-x-hidden overflow-y-scroll scrollbar-track-gray-700/20 scrollbar-thumb-red-950 scrollbar-thin'>
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
						I'm <b className='text-gray-400/95'>Emmanuel Ingwe</b>, <br /> a
						Frontend Developer with 3+ years of experience. I build good and
						swift web applications with technologies such as react, nextjs with
						typescript, that help individuals, businesses & brands satisfy their
						customers and compete globally. I'm passionate about my job, and
						always makes sure it's done. I'm available for new projects and
						freelance collaborations, get in touch, let's work together fam.
					</motion.p>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default index;
