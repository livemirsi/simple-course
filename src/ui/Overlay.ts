import styled from 'styled-components';
import { colors } from 'ui/Theme/colors';

export const Overlay = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: ${colors.white};
	opacity: 0.7;
	z-index: 100;
`;
