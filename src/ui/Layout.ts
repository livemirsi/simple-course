import styled from 'styled-components';

interface ILayoutProps {
	width?: string;
}

export const Layout = styled.div<ILayoutProps>`
	position: relative;
	display: inline-flex;
	flex-direction: column;
	align-self: flex-start;
	width: ${({ width }) => width ? width : 'auto'};
	box-sizing: border-box;
	margin: 20vh auto;
	padding: 20px;
	background: #fff;

  @media (max-width: 1024px) {
    width: 90vw;
  }
`;
