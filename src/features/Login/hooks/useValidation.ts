import { useState } from 'react';

interface IState {
	[x: string]: boolean;
}

interface IReportValidation {
	({ name, valid }: {name: string, valid: boolean}): void
}

interface ICheckEmail {
	(value: string): string
}

interface ICheckPassword {
	(value: string): string
}

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

