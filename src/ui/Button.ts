import styled from 'styled-components';
import { colors } from 'ui/Theme/colors';

interface IButtonProps {
	margin?: string;
	disabled?: boolean;
}

export const Button = styled.button<IButtonProps>`
	height: 40px;
	margin: ${({ margin }) => margin ? margin : '0px'};
	color: ${colors.white};
	font-size: 16px;
	text-transform: uppercase;
	background: ${colors.blue};
	border: none;
	cursor: pointer;

	&[disabled] {
		opacity: 0.5;
	}
`;
