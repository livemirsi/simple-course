import { ChangeEvent, FocusEvent } from 'react';

export type TEventChangeInput = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => void;

export type TEventFocusInput = ({ target }: FocusEvent<HTMLInputElement>) => void;

export interface IInputProps {
	value: string;
	name: string;
	label: string;
	error?: string;
	margin?: string;
	type?: string;
	onChange: TEventChangeInput;
	onInput?: TEventChangeInput;
	onFocus?: TEventFocusInput;
	onBlur?: TEventFocusInput;
	onClick?: (args: any) => any
}

export interface IInputPropsValidation {
	value: string;
	name: string;
	label: string;
	error?: string;
	margin?: string;
	type?: string;
	onChange: TEventChangeInput;
	onCheckValidation: (value: string) => string;
	onReportValidation: (obj: { name: string, valid: boolean }) => void
}
