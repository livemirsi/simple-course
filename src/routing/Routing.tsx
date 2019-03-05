import React, { Fragment, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { PrivateRouter } from 'routing/PrivateRouter';
import { HomePage } from 'pages/Home/Home';
import { LoginPage } from 'pages/Login/Login';
import { user } from 'stores/user/user';

export const Routing = observer(() => {

	const userStore = useContext(user);
	useEffect(() => {

		userStore.check();

	}, []);

	return (
		<Router>
			<Fragment>
				<PrivateRouter
					isLogged={userStore.isLogged}
					checkingUser={userStore.checkingUser}
					path={'/'}
					exact
					component={HomePage}
				/>
				<Route path={'/login'} component={LoginPage} />
			</Fragment>
		</Router>
	);

});
