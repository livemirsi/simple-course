import { useState } from 'react';

import { IFormProps } from 'features/LoginForm/types/form';

interface IState {
	[x: string]: string;
}

type IChangeField = IFormProps['onChange'];

export const useStateFields = (): [string, string, IChangeField] => {

	const [state, setField] = useState<IState>({
		email:    '',
		password: ''
	});

	const changeField: IChangeField = ({ currentTarget }) => {

		setField({
			...state,
			[currentTarget.name]: currentTarget.value
		});

	};

	const { email, password } = state;

	return [email, password, changeField];

};

