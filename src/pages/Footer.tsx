import React from "react";

type Props = {};

const Footer = (props: Props) => {
	return (
		<div
			className=' bg-gray-900 relative flex flex-col
		 h-20 w-scree bottom-0 items-center justify-center text-xs font-semibold text-gray-400'>
			<h4>
				{" "}
				<small className='text-xs'> &copy; </small>2023 Ei. All rights reserved.
			</h4>
			<p>
				<a href='https://github.com/Emmanuel-ingwe'>Designed & Built by E.i</a>
			</p>
		</div>
	);
};

export default Footer;
