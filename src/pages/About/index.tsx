import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Header from "../Header";

type Props = {};

function index({}: Props) {
	return (
		<div className='gradient-01 h-[1400px]'>
			<Head>
				<title>E.i | About me</title>
			</Head>

			<Header />

			<div className='overflow-hidde flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
				<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
					About
				</h3>

				<motion.img
					initial={{
						x: -200,
					}}
					transition={{
						duration: 1.2,
					}}
					whileInView={{ x: 0 }}
					viewport={{ once: true }}
					src='about-img.jpg'
					width='380px'
					className='flex absolute left-2 top-56'
				/>
			</div>
		</div>
	);
}

export default index;
