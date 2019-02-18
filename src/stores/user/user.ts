import { createContext } from 'react';
import { observable, action, decorate } from 'mobx';

import { IUser, Status } from 'stores/user/type';
import { IError } from 'api/request/type';

import { userApi } from 'api';

export class UserClass implements IUser {

	private api: typeof userApi;

	constructor({ api }: { api: typeof userApi}) {

		this.api = api;

	}

	public token: string = '';

	public name: string = '';

	public email: string = '';

	public status: string = Status.idle;

	public errors: Array<IError> = [];

	auth = async ({ email, password }: {email: string, password: string}) => {

		this.status = Status.wait;
		const response = await this.api.authUser({
			email,
			password
		});

		if (response.errors) {

			this.errors = response.errors;

		}

		if (response.data) {

			this.token = response.data.token;
			this.name = response.data.name;
			this.email = response.data.email;

		}

		this.status = Status.idle;

	}

}

decorate(UserClass, {
	token:  observable,
	name:   observable,
	email:  observable,
	status: observable,
	errors: observable,
	auth:   action
});

export const user = createContext(new UserClass({ api: userApi }));
