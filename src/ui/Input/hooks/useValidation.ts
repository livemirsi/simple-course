import { useState } from 'react';

import { TEventChangeInput, TEventFocusInput, IInputPropsValidation } from 'ui/Input/types/input';

interface IProps extends Pick<
	IInputPropsValidation,
	'onCheckValidation' | 'onReportValidation'
> {
	name: string;
}
type Error = string;
type TOutpt = [Error, TEventFocusInput, TEventFocusInput, TEventChangeInput];

export const useValidation = ({ name, onCheckValidation, onReportValidation }: IProps): TOutpt => {

	const [error, setError] = useState<Error>('');

	const handleFocus: TEventFocusInput = () => {

		setError('');

	};

	const handleBlur: TEventFocusInput = ({ target }) => {

		const newError = onCheckValidation(target.value);
		setError(newError);

	};

	const handleInput: TEventChangeInput = ({ target }) => {

		onReportValidation({
			name,
			valid: !onCheckValidation(target.value)
		});

	};

	return [error, handleFocus, handleBlur, handleInput];

};

