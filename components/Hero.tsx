import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import SocialIcons from "../components/SocialIcons";
import Mailto from "../components/Mailto";

type Props = {};

function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: ["hi,", "I am Emmanuel Ingwe.", ""],
		loop: true,
		delaySpeed: 1400,
	});

	return (
		<div className='container h-full flex flex-col space-y- items-center justify-center text-center overflow-hidden'>
			<BackgroundCircles />
			<img
				src='dp.jpg'
				alt=''
				width='120px'
				className='absolute rounded-full mt-16'
			/>
			<h2 className='absolute uppercase text-gray-700 bottom-32 tracking-[8px] text-sm'>
				Software Engineer
			</h2>
			<h1>
				<span>{text}</span>
				<Cursor cursorColor='indigo' />
			</h1>

			<SocialIcons />

			<Mailto />
		</div>
	);
}

export default Hero;
