import React from 'react';
import { Layout } from 'ui';
import { Login } from 'features/Login/Login';
import { RouteComponentProps } from 'react-router-dom';

export const LoginPage = ({ history }: RouteComponentProps) => {

	const handleAuthDone = () => {

		history.push('/');

	};

	return (
		<Layout width={'500px'}>
			<Login onAuthDone={handleAuthDone} />
		</Layout>
	);

};

