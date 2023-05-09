import React from "react";
import Head from "next/head";
import Header from "../Header";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

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

			<div className='containr flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
				<h3 className='tracking-[20px] uppercase text-gray-500 text-2xl m-10'>
					Contact
				</h3>

				<div className='flex flex-col space-y-10'>
					<h4 className='text-2xl fontsemibold text-center'>
						I got what you looking for.{""}{" "}
						<span className='decoration-red-900 underline'>Let's talk</span>
					</h4>

					<div className=''></div>
				</div>
			</div>
		</div>
	);
}

export default contact;
