import React, { Fragment } from 'react';

import { Title, InputValidation, Button,
	Overlay, Spinner, Notification, theme } from 'ui';
import { IFormProps } from 'features/LoginForm/types/form';

export const FormComponent = ({
	status, email, password, emailIsValid, passwordIsValid, errors,
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
		{Boolean(errors.length) &&
		<Notification
			variant={'error'}
			messages={errors}
		/>}
		{status === 'wait' &&
			<Overlay>
				<Spinner
					type={'Oval'}
					color={theme.colors.blue}
					height={'100'}
					width={'100'}
				/>
			</Overlay>}
	</Fragment>
);

