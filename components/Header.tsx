import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
	return (
		<header>
			<div>
				<SocialIcon url='https//twitter.com/jaketrent' />
			</div>
		</header>
	);
}
