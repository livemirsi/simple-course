import styled from 'styled-components';
import { colors } from 'ui/Theme/colors';

export const Input = styled.input`
	height: 40px;
	width: 100%;
	font-size: 18px;
	padding: 5px;
	color: ${colors.black};
	box-sizing: border-box;
	border: 0px;
	border-bottom: 1px solid ${colors.grey};

	&:focus {
		outline: none;
		border-bottom: 1.5px solid ${colors.blue};
	} 
`;
