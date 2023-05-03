import React from "react";
import Head from "next/head";
import Header from "../Header";

type Props = {};

function index({}: Props) {
	return (
		<div>
			<Head>
				<title>E.i | my Projects</title>
			</Head>

			<Header />

			<div className='gradient-01 h-screen text-gray-400 snap-y snap-madatory overflow-hidden z-0'>
				<h3 className=''>Experience</h3>
			</div>
		</div>
	);
}

export default index;
