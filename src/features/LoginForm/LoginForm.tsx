import React, { useContext, useLayoutEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { user } from 'stores/user/user';

import { useStateFields } from 'features/LoginForm/hooks/useStateFields';
import { useValidation } from 'features/LoginForm/hooks/useValidation';

import { FormComponent } from 'features/LoginForm/components/Form';

interface IProps {
	onAuthDone: () => void
}

export const LoginFormComponent = ({ onAuthDone }: IProps) => {

	const userStore = useContext(user);
	const [email, password, changeField] = useStateFields();
	const [
		emailIsValid, passwordIsValid,
		checkEmail, checkPassword,
		reportValidation
	] = useValidation();

	useLayoutEffect(() => {

		if (userStore.token) {

			onAuthDone();

		}

	});

	return (
		<FormComponent
			status={userStore.status}
			email={email}
			password={password}
			emailIsValid={emailIsValid}
			passwordIsValid={passwordIsValid}
			onChange={changeField}
			checkEmail={checkEmail}
			checkPassword={checkPassword}
			onReportValidation={reportValidation}
			onLogIn={() => userStore.auth({
				email,
				password
			})}
		/>
	);

};

export const LoginForm = observer(LoginFormComponent);

