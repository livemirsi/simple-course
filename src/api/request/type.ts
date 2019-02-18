export interface IError {
	message: string;
	code: number;
}

export interface IResponse<T> {
	status: number;
	data?: T;
	errors?: Array<IError>
}

export interface IArguments<T> {
	method?: string;
	url?: string;
	params?: {
		[x: string]: any
	}
	body?: {
		[x: string]: any
	};
	response: IResponse<T>
}
