export interface IInnputProps {
	value: string;
	name: string;
	label: string;
	error?: string;
	margin?: string;
	type?: string;
	onInput?: (args: any) => any;
	onChange: (args: any) => any;
	onFocus?: (args: any) => any;
	onBlur?: (args: any) => any;
}

export interface IInnputPropsValidation {
	onCheckValidation: (value: string) => string;
	onReportValidation: (obj: { name: string, valid: boolean }) => void
}
