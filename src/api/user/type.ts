import { IError } from 'api/request/type';
import { IUser } from 'stores/user/type';

export interface ICheck {
	(logged: IUser['logged'], notAuthorized: IUser['notAuthorized']):void
}

export interface ISuccess {
	isLogged: boolean,
	name: string;
	email: string;
}

export interface IUserAuth {
	data?: ISuccess;
	errors?: Array<IError>
}
