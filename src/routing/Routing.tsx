import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { PrivateRouter } from 'routing/PrivateRouter';
import { HomePage } from 'pages/Home/Home';
import { LoginPage } from 'pages/Login/Login';
import { user } from 'stores/user/user';

export const Routing = observer(() => {

	const userStore = useContext(user);
	console.log('token', userStore.token);

	return (
		<Router>
			<Fragment>
				<PrivateRouter
					token={userStore.token}
					path={'/'}
					exact
					component={HomePage}
				/>
				<Route path={'/login'} component={LoginPage} />
			</Fragment>
		</Router>
	);

});
