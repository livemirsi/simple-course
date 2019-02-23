import { FormEvent, FocusEvent } from 'react';

export type TEventFormInput = ({ currentTarget }: FormEvent<HTMLInputElement>) => void;

export type TEventFocusInput = ({ target }: FocusEvent<HTMLInputElement>) => void;

export interface IInputProps {
	value: string;
	name: string;
	label: string;
	error?: string;
	margin?: string;
	type?: string;
	onChange: TEventFormInput;
	onInput?: TEventFormInput;
	onFocus?: TEventFocusInput;
	onBlur?: TEventFocusInput;
}

export interface IInputPropsValidation {
	value: string;
	name: string;
	label: string;
	error?: string;
	margin?: string;
	type?: string;
	onChange: TEventFormInput;
	onCheckValidation: (value: string) => string;
	onReportValidation: (obj: { name: string, valid: boolean }) => void
}
