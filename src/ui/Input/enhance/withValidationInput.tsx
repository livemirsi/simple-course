import React, { Component, FormEvent, ComponentType } from 'react';
import { IInnputProps } from 'ui/Input/types';

interface IRecieveProps {
	checkValidation: (value: string) => string;
	reportValidation: (obj: { name: string, valid: boolean }) => void
}

interface IState {
	error: string;
}

export function withValidationInput (
	WrapComponent: ComponentType<IInnputProps>
): ComponentType<IInnputProps & IRecieveProps> {

	return class WithValidationInput extends Component<IInnputProps & IRecieveProps, IState> {

		state = { error: '' }

		handleFocus = () => {

			this.setState({ error: '' });

		}

		handleBlur = ({ currentTarget }: FormEvent<HTMLInputElement>) => {

			const { checkValidation } = this.props;

			this.setState(
				{ error: checkValidation(currentTarget.value) }
			);

		}

		handleInput = ({ currentTarget }: FormEvent<HTMLInputElement>) => {

			const { name, checkValidation, reportValidation } = this.props;

			reportValidation({
				name,
				valid: !checkValidation(currentTarget.value)
			});

		}

		render() {

			const { error } = this.state;

			return (
				<WrapComponent
					value={this.props.value}
					name={this.props.name}
					label={this.props.label}
					type={this.props.type}
					margin={this.props.margin}
					onInput={this.handleInput}
					onChange={this.props.onChange}
					onFocus={this.handleFocus}
					onBlur={this.handleBlur}
					error={error}
				/>
			);

		}

	};

}

