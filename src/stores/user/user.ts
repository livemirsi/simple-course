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

	public isLogged: boolean = false;

	public checkingUser: boolean = true;

	public name: string = '';

	public email: string = '';

	public status: string = Status.idle;

	public errors: Array<IError> = [];

	signUp = async () => {

		await this.api.signUp();
		this.isLogged = false;

	}

	notAuthorized = () => {

		this.checkingUser = false;

	}

	logged = ({ name, email }: {name: string, email: string}) => {

		this.isLogged = true;
		this.name = name;
		this.email = email;
		this.checkingUser = false;

	}

	check = () => {

		this.api.check(this.logged, this.notAuthorized);

	}

	auth = async ({ email, password }: {email: string, password: string}) => {

		this.status = Status.wait;
		const response = await this.api.auth({
			email,
			password
		});

		if (response.errors) {

			this.errors = response.errors;

		}

		if (response.data) {

			this.isLogged = response.data.isLogged;
			this.name = response.data.name;
			this.email = response.data.email;
			this.errors = [];

		}

		this.status = Status.idle;

	}

}

decorate(UserClass, {
	isLogged:     observable,
	checkingUser: observable,
	name:         observable,
	email:        observable,
	status:       observable,
	errors:       observable,
	auth:         action
});

export const user = createContext(new UserClass({ api: userApi }));
