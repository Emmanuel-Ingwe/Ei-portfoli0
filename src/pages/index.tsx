import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Header from "../../components/Header";

const Home: NextPage = () => {
	return (
		<div className='gradient-01 h-screen'>
			<Head>
				<title>E.i | frontend developer</title>
			</Head>

			<Header />
		</div>
	);
};

export default Home;
