import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Header from "./Header";
import Hero from "../../components/Hero";
import Footer from "./Footer";

const Home: NextPage = () => {
	return (
		<div>
			<div className='gradient-01 h-screen text-gray-400 overflow-x-hidden overflow-y-scroll scrollbar-track-gray-700/20 scrollbar-thumb-red-950 scrollbar-thin z-0'>
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
