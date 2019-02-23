import { useState } from 'react';

import { THandleEventInput, IInputPropsValidation } from 'ui/Input/types/input';

interface IProps extends Pick<
	IInputPropsValidation,
	'onCheckValidation' | 'onReportValidation'
> {
	name: string;
}
type Error = string;
type THandleEvent = THandleEventInput;
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

