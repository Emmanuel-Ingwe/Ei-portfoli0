import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: ["Hi there", "hey,", ""],
		loop: true,
		delaySpeed: 1400,
	});

	return (
		<div className='h-100 flex flex-col space-y- items-center justify-center text-center overflow-hidden'>
			<BackgroundCircles />
			<img
				src='dp.jpg'
				alt=''
				width='120px'
				className='absolute rounded-full mt-16'
			/>
			<h1>
				<span>{text}</span>
				<Cursor cursorColor='indigo' />
			</h1>
		</div>
	);
}

export default Hero;
