import styled, { css, keyframes } from 'styled-components';

interface IProps {
	['data-index']: number,
	delay: number;
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
	background: #fff;
	font-size: 15px;
	cursor: pointer;

	${({ delay }) => getAnimation(delay)};

	svg {
		position: absolute;
		left: 5px;
		top: 5px;
	}
`;
