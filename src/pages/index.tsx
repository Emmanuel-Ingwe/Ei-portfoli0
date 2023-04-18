import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

const Home: NextPage = () => {
	return (
		<div className='gradient-01 h-screen text-gray-400 snap-y snap-madatory overflow-hidden z-0'>
			<Head>
				<title>E.i | frontend developer</title>
			</Head>

			<Header />

			<section id='hero' className='snap-center'>
				<Hero />
			</section>
		</div>
	);
};

export default Home;
