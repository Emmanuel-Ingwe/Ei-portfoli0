import React from "react";
import Head from "next/head";
import Header from "../Header";
import { motion } from "framer-motion";
import Footer from "../Footer";
import GitIcon from "../../../components/GitIcon";

type Props = {};

function index({}: Props) {
	return (
		<div>
			<div className='gradient-01 h-full md:h-screen xl:h-full w-full text-gray-400 snap-y snap-madatory overflow-y-scroll scrollbar-thin scrollbar-track-gray-700/20 scrollbar-thumb-red-950vfbtgnt z-0'>
				<Head>
					<title>E.i | my Projects</title>
				</Head>

				<Header />

				<div className='container flex flex-col items-center justify-center'>
					<h3 className='uppercase tracking-[20px] text-gray-500 text-2xl m-10'>
						Projects
					</h3>

					<div className='w-full flex space-x-5 overflow-x-scroll  scrollbar-track-gray-700/20 scrollbar-thumb-red-950 scrollbar-thin p-10 snap-x snap-mandatory mb-20'>
						<article className='flex flex-col items-center justify-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#161335] p-10 hover:opacity-100 opacity-40 cursor-pointed transition-opacity duration-200 overflow-hidden'>
							<motion.img
								initial={{
									y: -100,
									opacity: 0,
								}}
								transition={{
									duration: 1.2,
								}}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								src='disney-big.jpg'
								alt=''
								className='h-52 w-64 md:w-96 xl:w-3/5 rounded-2xl object-cover object-center'
							/>

							<div className='px-0 md:px-10'>
								<h4 className='text-3xl font-light'>
									Case study 1{" "}
									<small className='font-thin text-gray-500'>of 1 :</small>{" "}
									<small className='font-thin text-cyan-900 hover:text-cyan-700 transition duration-500'>
										<a href='https://disney-clone-yujs.vercel.app/'>Disney Clone</a>
									</small>
								</h4>
								<p className=' text-gray-300 underline decoration-red-950 text-1xl mt-1'>
									Disney clone web app, built with nextjs, tailwind, firebase
									and google auth.
								</p>
								<GitIcon link="https://github.com/Emmanuel-ingwe/disney-clone" />
							</div>
						</article>

						<article className='flex flex-col items-center justify-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px]  snap-center bg-[#161335] p-10 hover:opacity-100 opacity-40 cursor-pointed transition-opacity duration-200 overflow-hidden'>
							<motion.img
								initial={{
									y: -100,
									opacity: 0,
								}}
								transition={{
									duration: 1.2,
								}}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								src='kick-nation.png'
								alt=''
								className='h-52 w-64 rounded-2xl md:w-96 xl:w-3/5 object-cover object-center'
							/>

							<div className='px-0 md:px-10'>
								<h4 className='text-3xl font-light'>
									Case study 1{" "}
									<small className='font-thin text-gray-500'>of 3 :</small>{" "}
									<small className='font-thin text-cyan-900 hover:text-cyan-700 transition duration-500'>
										<a href='https://kick-nationfigm.vercel.app/'>Kick Nation</a>
									</small>
								</h4>
								<p className=' text-gray-300 underline decoration-red-950 text-1xl mt-1'>
									A Mystery football shirt experience store app. built with nextjs and tailwind.
								</p>
								<GitIcon link="https://github.com/Emmanuel-Ingwe/kick-nationfigm" />
							</div>
						</article>
						<article className='flex flex-col items-center justify-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#161335] p-10 hover:opacity-100 opacity-40 cursor-pointed transition-opacity duration-200 overflow-hidden'>
							<motion.img
								initial={{
									y: -100,
									opacity: 0,
								}}
								transition={{
									duration: 1.2,
								}}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								src='kick-nation.png'
								alt=''
								className='h-52 w-64 rounded-2xl md:w-96 xl:w-3/5 object-cover object-center '
							/>

							<div className='px-0 md:px-10'>
								<h4 className='text-3xl font-light'>
									Case study 1{" "}
									<small className='font-thin text-gray-500'>of 4 :</small>{" "}
									<small className='font-thin text-cyan-900 hover:text-cyan-700 transition duration-500'>
										<a href='https://ei-portfoli0.vercel.app/'>Personal Portfolio website</a>
									</small>
								</h4>
								<p className=' text-gray-300 underline decoration-red-950 text-1xl mt-1'>
									My Portfolio website, built with nextjs, typescript, framer motion and tailwind css.
								</p>
								<GitIcon link="https://github.com/Emmanuel-Ingwe/Ei-portfoli0" />
							</div>
						</article>
						<article className='flex flex-col items-center justify-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#161335] p-10 hover:opacity-100 opacity-40 cursor-pointed transition-opacity duration-200 overflow-hidden'>
							<motion.img
								initial={{
									y: -100,
									opacity: 0,
								}}
								transition={{
									duration: 1.2,
								}}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								src='portfolio-img.png'
								alt=''
								className='h-52 w-64 rounded-2xl md:w-96 xl:w-3/5 object-cover object-center items-center justify-center'
							/>

							<div className='px-0 md:px-10'>
								<h4 className='text-3xl font-light'>
									Case study 1{" "}
									<small className='font-thin text-gray-500'>of 5 :</small>{" "}
									<small className='font-thin text-cyan-900 hover:text-cyan-700 transition duration-500'>
										<a href='https://bank-modern-app-rust-alpha.vercel.app/'>Payment website</a>
									</small>
								</h4>
								<p className=' text-gray-300 underline decoration-red-950 text-1xl mt-1'>
										A Modern website Ui, Built with react and tailwind css.
								</p>
								<GitIcon link="https://github.com/Emmanuel-Ingwe/bank-modern-app" />
							</div>
						</article>
						<article className='flex flex-col items-center justify-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#161335] p-10 hover:opacity-100 opacity-40 cursor-pointed transition-opacity duration-200 overflow-hidden'>
							<motion.img
								initial={{
									y: -100,
									opacity: 0,
								}}
								transition={{
									duration: 1.2,
								}}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								src='e-com.png'
								alt=''
								className='h-52 w-64 rounded-2xl md:w-96 xl:w-3/5 object-cover object-center'
							/>

							<div className='px-0 md:px-10'>
								<h4 className='text-3xl font-light'>
									Case study 1{" "}
									<small className='font-thin text-gray-500'>of 6 :</small>{" "}
									<small className='font-thin text-cyan-900 hover:text-cyan-700 transition duration-500'>
										<a href='https://github.com/Emmanuel-ingwe'>Flutterwave Clone.</a>
									</small>
								</h4>
								<p className=' text-gray-300 underline decoration-red-950 text-1xl mt-1'>
									Fluttewave website clone, built with html,css & javascript.
								</p>
								<GitIcon link="https://github.com/Emmanuel-Ingwe/Flutterwave_clone" />
							</div>
						</article>

						<article className='flex flex-col items-center justify-center  space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#161335] p-10 hover:opacity-100 opacity-40 cursor-pointed transition-opacity duration-200 overflow-hidden'>
							<motion.img
								initial={{
									y: -100,
									opacity: 0,
								}}
								transition={{
									duration: 1.2,
								}}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								src='hulu-big.jpg'
								alt=''
								className='h-52 w-64 rounded-2xl md:w-96 xl:w-3/5 object-cover object-center items-center justify-center'
							/>

							<div className='px-0 md:px-10'>
								<h4 className='text-3xl font-light'>
									Case study 1{" "}
									<small className='font-thin text-gray-500'>of 2 :</small>{" "}
									<small className='font-thin text-cyan-900 hover:text-cyan-700 transition duration-500'>
										<a href='https://hulu-2-0-jet.vercel.app/'>Hulu Clone</a>
									</small>
								</h4>
								<p className=' text-gray-300 underline decoration-red-950 text-1xl mt-1'>
									Hulu clone web app, built with react, tailwind and firebase
								</p>
								<GitIcon link='https://github.com/Emmanuel-Ingwe/hulu-2-0' />
							</div>
						</article>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default index;
