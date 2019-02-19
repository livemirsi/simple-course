import React from 'react';
import { Layout } from 'ui';
import { LoginForm } from 'features/LoginForm/LoginForm';
import { RouteComponentProps } from 'react-router-dom';

export const LoginPage = ({ history }: RouteComponentProps) => {

	const handleAuthDone = () => {

		history.push('/');

	};

	return (
		<Layout width={'500px'}>
			<LoginForm onAuthDone={handleAuthDone} />
		</Layout>
	);

};

