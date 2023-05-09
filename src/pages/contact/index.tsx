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

					<div className='space-y-10'>
						<div className='flex items-center space-x-5 justify-center'>
							<PhoneIcon className='text-red-900 h-7 w-7 animate-pulse' />
							<p className='text-1xl'>+2348139320656</p>
						</div>
						<div className='flex items-center space-x-5 justify-center'>
							<EnvelopeIcon className='text-red-900 h-7 w-7 animate-pulse' />
							<p className='text-1xl'>ingwemmanuel@gmail.com</p>
						</div>
						<div className='flex items-center space-x-5 justify-center'>
							<MapPinIcon className='text-red-900 h-7 w-7 animate-pulse' />
							<p className='text-1xl'>Calabar, CRS</p>
						</div>
					</div>

					<form className='flex flex-col' action=''>
						<div>
							<input type='text' />
							<input type='text' />
						</div>

						<input type='text' />

						<textarea name='' id=''></textarea>
						<button className=''>Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default contact;
