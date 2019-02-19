import { useState } from 'react';

import { IFormProps } from 'features/LoginForm/types/form';

interface IState {
	[x: string]: boolean;
}

type IReportValidation = IFormProps['onReportValidation'];

type ICheckEmail = IFormProps['checkEmail'];

type ICheckPassword = IFormProps['checkPassword'];

type TOutpt = [boolean, boolean, ICheckEmail, ICheckPassword, IReportValidation];

export const useValidation = (): TOutpt => {

	const [state, setValidation] = useState<IState>({
		emailIsValid:    false,
		passwordIsValid: false
	});

	const reportValidation: IReportValidation = ({ name, valid }) => {

		setValidation({
			...state,
			[`${name}IsValid`]: valid ? true : false
		});

	};

	const checkEmail: ICheckEmail = value => {

		const isEmail = (/^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/i)
			.test(value);

		if (!isEmail) {

			return 'write correct email';

		}

		return '';

	};

	const checkPassword: ICheckPassword = value => {

		if (value.length < 5) {

			return 'password must be more than 5 characters';

		}

		return '';

	};

	const { emailIsValid, passwordIsValid } = state;

	return [
		emailIsValid,
		passwordIsValid,
		checkEmail,
		checkPassword,
		reportValidation
	];

};

