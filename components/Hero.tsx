import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			"Hi, The Name's Emmanuel Ingwe",
			"They're a lot of hubbies",
			"<ButLovesToCodeMore/>",
		],
		loop: true,
		delaySpeed: 1500,
	});

	return (
		<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
			<BackgroundCircles />
			<img src='' alt='' />
			<h1>
				<span>{text}</span>
				<Cursor cursorColor='indigo' />
			</h1>
		</div>
	);
}

export default Hero;
