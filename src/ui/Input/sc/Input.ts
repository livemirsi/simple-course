import styled from 'styled-components';

export const Input = styled.input`
	height: 40px;
	width: 100%;
	font-size: 18px;
	padding: 5px;
	color: #4f4f4f;
	box-sizing: border-box;
	border: 0px;
	border-bottom: 1px solid #ccc;

	&:focus {
		outline: none;
		border-bottom: 1.5px solid #4286f4;
	} 
`;
