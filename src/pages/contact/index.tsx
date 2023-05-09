import React from "react";
import Head from "next/head";
import Header from "../Header";
import { motion } from "framer-motion";

type Props = {
	directionLeft?: boolean;
};

function contact({ directionLeft }: Props) {
	return (
		<div className='gradient-01 h-screen w-full text-gray-400 snap-y snap-madatory overflow-x-hidden z-0'>
			<Head>
				<title>E.i | my Projects</title>
			</Head>

			<Header />

			<div className='container flex flex-col items-center justify-center'>
				<h3 className='tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
			</div>
		</div>
	);
}

export default contact;
