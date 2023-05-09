import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Header from "./Header";
import Hero from "../../components/Hero";

const Home: NextPage = () => {
	return (
		<div className='gradient-01 h-screen text-gray-400 snap-y snap-madatory overflow-x-hidden overflow-y-scrool z-0'>
			<Head>
				<title>E.i | Frontend Developer</title>
			</Head>

			<Header />

			<section id='hero' className='snap-center'>
				<Hero />
			</section>
		</div>
	);
};

export default Home;
