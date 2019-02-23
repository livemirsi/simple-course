import { useState } from 'react';

import { TEventFormInput, TEventFocusInput, IInputPropsValidation } from 'ui/Input/types/input';

interface IProps extends Pick<
	IInputPropsValidation,
	'onCheckValidation' | 'onReportValidation'
> {
	name: string;
}
type Error = string;
type TOutpt = [Error, TEventFocusInput, TEventFocusInput, TEventFormInput];

export const useValidation = ({ name, onCheckValidation, onReportValidation }: IProps): TOutpt => {

	const [error, setError] = useState<Error>('');

	const handleFocus: TEventFocusInput = () => {

		setError('');

	};

	const handleBlur: TEventFocusInput = ({ target }) => {

		const newError = onCheckValidation(target.value);
		setError(newError);

	};

	const handleInput: TEventFormInput = ({ currentTarget }) => {

		onReportValidation({
			name,
			valid: !onCheckValidation(currentTarget.value)
		});

	};

	return [error, handleFocus, handleBlur, handleInput];

};

