import React from "react";
import Head from "next/head";

type Props = {};

function index({}: Props) {
	return (
		<div>
			<Head>
				<title>E.i | my Projects</title>
			</Head>

			<div className='gradient-01 h-screen text-gray-400 snap-y snap-madatory overflow-hidden z-0'></div>
		</div>
	);
}

export default index;
