import React from 'react';
import Loader from 'react-loader-spinner';

interface IProps {
	type: string;
	color: string;
	height: string;
	width: string;
}

export const Spinner = ({
	type, color, height, width
}: IProps) => (
	<Loader
		type={type}
		color={color}
		height={height}
		width={width}
	/>
);
