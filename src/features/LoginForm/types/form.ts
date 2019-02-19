import { FormEvent } from 'react';

export interface IFormProps {
	status: string;
	email: string;
	password: string;
	emailIsValid: boolean;
	passwordIsValid: boolean;
	onChange: (args: FormEvent<HTMLInputElement>) => void;
	checkEmail: (value: string) => string,
	checkPassword: (value: string) => string,
	onReportValidation: (args: {name: string, valid: boolean}) => void
	onLogIn: (args: any) => void
}
