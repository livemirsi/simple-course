import * as firebase from 'firebase/app';
import 'firebase/auth';

import { IUserAuth, ICheck } from 'api/user/type';

const config = {
	apiKey:            '',
	authDomain:        'simple-course-6639d.firebaseapp.com',
	databaseURL:       'https://simple-course-6639d.firebaseio.com',
	projectId:         'simple-course-6639d',
	storageBucket:     'simple-course-6639d.appspot.com',
	messagingSenderId: '578021918615'
};
firebase.initializeApp(config);

export const auth = async (
	{ email, password }: {email: string, password: string}
): Promise<IUserAuth> => {

	const response = await firebase.auth().signInWithEmailAndPassword(email, password)
		.catch(error => error);

	if (!response.user) {

		return { errors: [{ message: response.message }] };

	}

	return { data: {
		isLogged: true,
		name:     response.user.displayName,
		email:    response.user.email
	} };

};

export const check: ICheck = (logged, notAuthorized) => {

	firebase.auth().onAuthStateChanged(user => {

		if (user) {

			logged({
				name:  user.displayName || '',
				email: user.email || ''
			});

		}

		notAuthorized();

	});

};

export const signUp = async () => {

	await firebase.auth().signOut();

};
