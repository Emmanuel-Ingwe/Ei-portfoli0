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

			<div className='container flex relative flex-col text-center max-w-7xl px-10 justify-evenly mx-auto items-center'>
				<h3 className='tracking-[20px] uppercase text-gray-500 text-2xl m-10'>
					Contact
				</h3>

				<div className='flex flex-col space-y-10 m-10'>
					<h4 className='text-1xl font-semibold text-center md:text-2xl'>
						I got what you looking for.{""} {""}
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

					<form
						className='flex flex-col space-y-2 w-screen sm:w-fit p-3'
						action=''>
						<div className='flex flex-col sm:flex-row sm:space-x-2'>
							<motion.input
								initial={{
									y: 300,
								}}
								transition={{
									duration: 0.5,
								}}
								whileInView={{ y: 0 }}
								viewport={{ once: true }}
								placeholder='Name'
								className='contactInput mb-1'
								type='text'
							/>
							<motion.input
								initial={{
									y: 300,
								}}
								transition={{
									duration: 0.5,
								}}
								whileInView={{ y: 0 }}
								viewport={{ once: false }}
								placeholder='Email'
								className='contactInput mb-1'
								type='email'
							/>
						</div>

						<motion.input
							initial={{
								y: 300,
							}}
							transition={{
								duration: 0.8,
							}}
							whileInView={{ y: 0 }}
							viewport={{ once: false }}
							placeholder='Subject'
							className='contactInput'
							type='text'
						/>

						<motion.textarea
							initial={{
								y: 240,
							}}
							transition={{
								duration: 1,
							}}
							whileInView={{ y: 0 }}
							viewport={{ once: false }}
							placeholder='Message'
							className='contactInput'
							name=''
							id=''></motion.textarea>

						<motion.button
							initial={{
								x: 300,
							}}
							transition={{
								duration: 1.5,
							}}
							whileInView={{ x: 0 }}
							viewport={{ once: false }}
							type='submit'
							className='bg-red-950 py-5 px-10 rounded-md text-black font-bold text-lg'>
							Submit
						</motion.button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default contact;
