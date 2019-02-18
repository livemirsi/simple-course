import { IError } from 'api/request/type';

export enum Status {
	idle = 'idle',
	wait = 'wait'
}

export interface IUser {
	token: string;
	name: string;
	email: string;
	status: string;
	errors: Array<IError>;
	auth: ({ email, password }: {email: string, password: string}) => void
}
