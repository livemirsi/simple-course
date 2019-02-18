import { useState, FormEvent } from 'react';

interface IState {
	[x: string]: string;
}

interface IChangeField {
  ({ currentTarget }: FormEvent<HTMLInputElement>): void;
}

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

