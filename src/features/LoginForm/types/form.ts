import { FormEvent } from 'react';
import { IError } from 'api/request/type';

export interface IFormProps {
	status: string;
	email: string;
	password: string;
	emailIsValid: boolean;
	passwordIsValid: boolean;
	errors: Array<IError>;
	onChange: (args: FormEvent<HTMLInputElement>) => void;
	checkEmail: (value: string) => string,
	checkPassword: (value: string) => string,
	onReportValidation: (args: {name: string, valid: boolean}) => void
	onLogIn: (args: any) => void
}
