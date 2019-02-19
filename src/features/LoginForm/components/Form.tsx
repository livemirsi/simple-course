import React, { Fragment } from 'react';

import { Title, InputValidation, Button, Overlay, Spinner } from 'ui';
import { IFormProps } from 'features/LoginForm/types/form';

export const FormComponent = ({
	status, email, password, emailIsValid, passwordIsValid,
	onChange, checkEmail, checkPassword, onReportValidation, onLogIn
}: IFormProps) => (
	<Fragment>
		<Title>Log in</Title>
		<InputValidation
			value={email}
			name={'email'}
			label={'email'}
			onChange={onChange}
			onCheckValidation={checkEmail}
			onReportValidation={onReportValidation}
		/>
		<InputValidation
			value={password}
			name={'password'}
			label={'password'}
			type={'password'}
			margin={'30px 0'}
			onChange={onChange}
			onCheckValidation={checkPassword}
			onReportValidation={onReportValidation}
		/>
		<Button
			margin={'20px 0px 0px 0px'}
			disabled={emailIsValid && passwordIsValid ? false : true}
			onClick={onLogIn}
		>
			Log in
		</Button>

		{status === 'wait' &&
			<Overlay>
				<Spinner
					type={'Oval'}
					color={'#4286f4'}
					height={'100'}
					width={'100'}
				/>
			</Overlay>}
	</Fragment>
);

