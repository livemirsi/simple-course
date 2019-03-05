import React, { ComponentType } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Overlay, Spinner, theme } from 'ui';

interface IProp extends RouteProps {
	isLogged: boolean,
	checkingUser: boolean,
	component: ComponentType
}

export const PrivateRouter = ({
	component: Component, isLogged, checkingUser, ...rest
}: IProp) => (
	<Route {...rest} render={(props: RouteProps) => {

		if (checkingUser) {

			return (
				<Overlay>
					<Spinner
						type={'Oval'}
						color={theme.colors.blue}
						height={'100'}
						width={'100'}
					/>
				</Overlay>
			);

		}

		if (!isLogged) {

			return (
				<Redirect to={'/login'} />
			);

		}

		if (isLogged && !checkingUser) {

			return <Component {...props}/>;

		}

	}
	} />
);

