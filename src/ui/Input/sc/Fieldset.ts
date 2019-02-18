import styled from 'styled-components';

interface IFieldsetProps {
	margin?: string;
}

export const Fieldset = styled.fieldset<IFieldsetProps>`
	position: relative;
	width: 100%;
	margin: ${({ margin }) => margin ? margin : '0px'};
	padding: 0px;
	border: none;
`;
