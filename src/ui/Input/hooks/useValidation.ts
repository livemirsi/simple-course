import { useState, FormEvent } from 'react';

import { IInnputPropsValidation } from 'ui/Input/types';

interface IProps extends IInnputPropsValidation {
	name: string;
}
type Error = string;
type THandleEvent = ({ currentTarget }: FormEvent<HTMLInputElement>) => void;
type TOutpt = [Error, THandleEvent, THandleEvent, THandleEvent];

export const useValidation = ({ name, onCheckValidation, onReportValidation }: IProps): TOutpt => {

	const [error, setError] = useState<Error>('');

	const handleFocus = () => {

		setError('');

	};

	const handleBlur: THandleEvent = ({ currentTarget }) => {

		const newError = onCheckValidation(currentTarget.value);
		setError(newError);

	};

	const handleInput: THandleEvent = ({ currentTarget }) => {

		onReportValidation({
			name,
			valid: !onCheckValidation(currentTarget.value)
		});

	};

	return [error, handleFocus, handleBlur, handleInput];

};

