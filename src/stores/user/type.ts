import { IError } from 'api/request/type';

export enum Status {
	idle = 'idle',
	wait = 'wait'
}

export interface IUser {
	isLogged: boolean;
	checkingUser: boolean;
	name: string;
	email: string;
	status: string;
	errors: Array<IError>;
	signUp: () => void;
	notAuthorized: () => void;
	logged: ({ name, email }: {name: string, email: string}) => void;
	check: () => void;
	auth: ({ email, password }: {email: string, password: string}) => void;
}
