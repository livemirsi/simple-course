import React from 'react';

import { Fieldset } from 'ui/Input/sc/Fieldset';
import { Label } from 'ui/Input/sc/Label';
import { Input } from 'ui/Input/sc/Input';
import { Error } from 'ui/Input/sc/Error';

import { IInputProps } from 'ui/Input/types/input';

export const InputComponent = (props: IInputProps) => {

	const {
		value, name, type, label, error, margin, onInput, onClick, onChange, onFocus, onBlur
	} = props;

	return (
		<Fieldset margin={margin}>
			{label && <Label>{label}</Label>}
			<Input
				value={value}
				name={name}
				aria-label={name}
				type={type || 'text'}
				onInput={onInput}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
				onClick={onClick}
			/>
			{error && <Error>{error}</Error>}
		</Fieldset>
	);

};

