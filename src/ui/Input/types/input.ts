import { FormEvent } from 'react';

export type THandleEventInput = ({ currentTarget }: FormEvent<HTMLInputElement>) => void;

export interface IInputProps {
	value: string;
	name: string;
	label: string;
	error?: string;
	margin?: string;
	type?: string;
	onChange: THandleEventInput;
	onInput?: THandleEventInput;
	onFocus?: THandleEventInput;
	onBlur?: THandleEventInput;
}

export interface IInputPropsValidation {
	value: string;
	name: string;
	label: string;
	error?: string;
	margin?: string;
	type?: string;
	onChange: THandleEventInput;
	onCheckValidation: (value: string) => string;
	onReportValidation: (obj: { name: string, valid: boolean }) => void
}
