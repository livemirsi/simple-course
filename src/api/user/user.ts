import { userData } from 'api/user/data';
import { request } from 'api/request/request';
import { IUserAuth } from 'api/user/type';

export const authUser = (
	{ email, password }: {email: string, password: string}
) => {

	return request<IUserAuth>({
		url:    '',
		method: 'post',
		body:   {
			email,
			password
		},
		response: userData.user
	});

};
