import React from "react";
import Head from "next/head";
import Header from "../Header";
import { motion } from "framer-motion";

type Props = {};

function index({}: Props) {
	return (
		<div className='gradient-01 h-screen w-full text-gray-400 snap-y snap-madatory overflow-hidden z-0'>
			<Head>
				<title>E.i | my Projects</title>
			</Head>

			<Header />

			<div className='container flex flex-col items-center justify-center'>
				<h3 className='uppercase tracking-[20px] text-gray-500 text-2xl mt-7'>
					Projects
				</h3>

				<article>
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
						className='w-32 h-32 rounded-lg xl:w-[200px] object-cover object-center'
					/>
				</article>
			</div>
		</div>
	);
}

export default index;
