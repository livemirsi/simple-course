import React from 'react';
import { InputValidation } from 'ui/Input/InputValidation';
import { render, fireEvent } from 'react-testing-library';
import { TEventChangeInput, IInputPropsValidation } from 'ui/Input/types/input';

describe('UI/Input', () => {

	interface IState {
		[key: string]: string | boolean;
		value: string;
	}
	const state: IState = {
		value:         '',
		testNameValid: false
	};

	const handleChange: TEventChangeInput = ({ target }) => {

		state.value = target.value;

	};

	const handleCheckValidation: IInputPropsValidation['onCheckValidation'] = value => {

		return (/^([A-Za-z]+)$/i).test(value) ? '' : 'error validation';

	};

	const handleReportValidation: IInputPropsValidation['onReportValidation'] = obj => {

		state.testNameValid = obj.valid;

	};

	const { queryByText, getByLabelText } = render(<InputValidation
		value={state.value}
		name={'testName'}
		type={'text'}
		label={'test label'}
		onChange={handleChange}
		onCheckValidation={handleCheckValidation}
		onReportValidation={handleReportValidation}
	/>);
	const input = getByLabelText('testName');

	test('change value', () => {

		fireEvent.change(input, { target: { value: '12345678' } });
		expect(state.value).toBe('12345678');

	});

	test('check validation onBlur, get error', () => {

		fireEvent.blur(input, { target: { value: '12345678' } });
		expect(queryByText('error validation')).not.toBe(null);

	});

	test('check validation onBlur, get success', () => {

		fireEvent.blur(input, { target: { value: 'text' } });
		expect(queryByText('error validation')).toBe(null);

	});

	test('reset validation on Focus', () => {

		fireEvent.focus(input, { target: { value: '12345678' } });
		expect(queryByText('error validation')).toBe(null);

	});

	test('report valdiation, get error', () => {

		fireEvent.input(input, { target: { value: '12345678' } });
		expect(state.testNameValid).toBeFalsy();

	});

	test('report valdiation, get success', () => {

		fireEvent.input(input, { target: { value: 'asfasf' } });
		expect(state.testNameValid).toBeTruthy();

	});

});
