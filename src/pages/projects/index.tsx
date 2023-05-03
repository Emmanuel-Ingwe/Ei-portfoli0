import React from "react";
import Head from "next/head";
import Header from "../Header";

type Props = {};

function index({}: Props) {
	return (
		<div className='gradient-01 h-screen w-full text-gray-400 snap-y snap-madatory overflow-hidden z-0'>
			<Head>
				<title>E.i | my Projects</title>
			</Head>

			<Header />

			<div className='container flex flex-col items-center justify-center'>
				<h3 className='uppercase tracking-[20px] text-gray-500 text-2xl'>
					Projects
				</h3>

				<article>
					<img
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
