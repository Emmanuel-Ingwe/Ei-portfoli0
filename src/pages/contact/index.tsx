import React from "react";
import Head from "next/head";
import Header from "../Header";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import Footer from "../Footer";

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type Props = {};

function contact({}: Props) {
	const { register, handleSubmit } = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:ingwemmanuel@gmail?subject=${formData.subject}&body=Hello, my name is ${formData.name}, ${formData.message} (${formData.email})`;
	};

	return (
		<div>
			<div className='gradient-01  h-full md:h-screen w-full text-gray-400 snap-y snap-madatory overflow-x-hidden  overflow-y-scroll scrollbar-track-gray-700/20 scrollbar-thumb-red-950 scrollbar-thin z-0'>
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
								<p className='text-1xl animate-bounce'>
									<a href='https://wa.me/message/FI6OFAJRBKVMI1'>
										+2348139320656{" "}
									</a>
								</p>
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
							onSubmit={handleSubmit(onSubmit)}
							className='flex flex-col space-y-2 w-screen sm:w-fit p-3'
							action=''>
							<div className='flex flex-col sm:flex-row sm:space-x-2'>
								<motion.input
									{...register("name")}
									initial={{
										y: 300,
									}}
									transition={{
										duration: 0.3,
									}}
									whileInView={{ y: 0 }}
									viewport={{ once: true }}
									placeholder='Name'
									className='contactInput mb-1'
									type='text'
								/>
								<motion.input
									{...register("email")}
									initial={{
										y: 300,
									}}
									transition={{
										duration: 0.3,
									}}
									whileInView={{ y: 0 }}
									viewport={{ once: false }}
									placeholder='Email'
									className='contactInput mb-1'
									type='email'
								/>
							</div>

							<motion.input
								{...register("subject")}
								initial={{
									y: 300,
								}}
								transition={{
									duration: 0.4,
								}}
								whileInView={{ y: 0 }}
								viewport={{ once: false }}
								placeholder='Subject'
								className='contactInput'
								type='text'
							/>

							<motion.textarea
								{...register("message")}
								initial={{
									y: 240,
								}}
								transition={{
									duration: 0.5,
								}}
								whileInView={{ y: 0 }}
								viewport={{ once: false }}
								placeholder='Message'
								className='contactInput'
								typeof='text'
								name='message'
								id=''></motion.textarea>

							<motion.button
								initial={{
									x: 250,
								}}
								transition={{
									duration: 0.55,
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
			<Footer />
		</div>
	);
}

export default contact;
