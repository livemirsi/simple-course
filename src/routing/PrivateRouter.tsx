import React, { ComponentType } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Redirect } from 'react-router';

interface IProp extends RouteProps {
	token: string,
	component: ComponentType
}

export const PrivateRouter = ({ component: Component, token, ...rest }: IProp) => (
	<Route {...rest} render={(props: RouteProps) => token ?
		<Component {...props}/> :
		<Redirect to={'/login'} />
	} />
);

