import styled, { css, keyframes } from 'styled-components';

import { TVariant } from 'ui/Theme/types';
import { colors, getColorByStatus } from 'ui/Theme/colors';

interface IProps {
	['data-index']: number,
	delay: number;
	variant: TVariant;
}

const rightToLeft = keyframes`
  from {
    right: -100%;
  }

  to {
    right: 0;
  }
`;

const getAnimation = (delay: number) => {

	return css`
  animation: ${rightToLeft} 0.35s linear;
	animation-delay: ${delay}s;
`;

};

export const Message = styled.div<IProps>`
	position: relative;
	width: 100%;
	margin-bottom: 10px;
	padding: 20px 20px 20px 40px;
	box-sizing: border-box;
	border-left: 5px solid ${({ variant }) => getColorByStatus(variant)};
	background: ${colors.white};
	color: ${colors.black};
	font-size: 15px;
	cursor: pointer;

	${({ delay }) => getAnimation(delay)};

	svg {
		position: absolute;
		left: 5px;
		top: 5px;
		pointer-events: none;
	}
`;
