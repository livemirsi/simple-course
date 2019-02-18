import styled from 'styled-components';

interface IButtonProps {
	margin?: string;
	disabled?: boolean;
}

export const Button = styled.button<IButtonProps>`
	height: 40px;
	margin: ${({ margin }) => margin ? margin : '0px'};
	color: #fff;
	font-size: 16px;
	text-transform: uppercase;
	background: #4286f4;
	border: none;
	cursor: pointer;

	&[disabled] {
		opacity: 0.5;
	}
`;
