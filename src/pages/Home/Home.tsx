import React, { useContext } from 'react';

import { user } from 'stores/user/user';

export const HomePage = () => {

	const userStore = useContext(user);

	return (
		<div>
			<h1>home page</h1>
			<button onClick={userStore.signUp}>sign up</button>
		</div>
	);

};

