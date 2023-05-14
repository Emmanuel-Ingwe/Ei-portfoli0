import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Header from "./Header";
import Hero from "../../components/Hero";
import Footer from "./Footer";

const Home: NextPage = () => {
	return (
		<div className='scrollbar-thin scrollbar-track-gray-700/20 scrollbar-thumb-red-950'>
			<div className='gradient-01 h-screen text-gray-400 z-0'>
				<Head>
					<title>E.i | Frontend Developer</title>
				</Head>

				<Header />

				<section id='hero' className='snap-center'>
					<Hero />
				</section>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
