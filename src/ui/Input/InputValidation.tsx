import React from 'react';

import { IInputPropsValidation } from 'ui/Input/types/input';

import { useValidation } from './hooks/useValidation';
import { InputComponent } from './Input';

type TProps = IInputPropsValidation;

export const InputValidation = (props: TProps) => {

	const {
		value, name, type, label, margin,
		onChange, onCheckValidation, onReportValidation
	} = props;

	const [error, handleFocus, handleBlur, handleInput] = useValidation({
		name,
		onCheckValidation,
		onReportValidation
	});

	return (
		<InputComponent
			value={value}
			name={name}
			label={label}
			error={error}
			margin={margin}
			type={type}
			onInput={handleInput}
			onChange={onChange}
			onFocus={handleFocus}
			onBlur={handleBlur}
		/>
	);

};

