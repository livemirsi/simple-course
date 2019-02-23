import React from 'react';
import { mount } from 'enzyme';
import { InputValidation } from 'ui/Input/InputValidation';
import { THandleEventInput, IInputPropsValidation } from 'ui/Input/types/input';

describe('UI/Input', () => {

	interface IState {
		[key: string]: string | boolean;
		value: string;
	}
	const state: IState = {
		value: '',
		valid: false
	};

	const handleChange: THandleEventInput = ({ currentTarget }) => {

		console.log(currentTarget);
		state.value = currentTarget.value;

	};

	const handleCheckValidation: IInputPropsValidation['onCheckValidation'] = value => {

		console.log('work');

		return (/^([A-Za-z]+)$/i).test(value) ? '' : 'error validation';

	};

	const handleReportValidation: IInputPropsValidation['onReportValidation'] = obj => {

		state[obj.name] = obj.valid;

	};

	const wrapper = mount(<InputValidation
		value={state.value}
		name={'test name'}
		type={'text'}
		label={'test label'}
		onChange={handleChange}
		onCheckValidation={handleCheckValidation}
		onReportValidation={handleReportValidation}
	/>);

	test('check exists label and input', () => {

		expect(wrapper.exists('label')).toBeTruthy();
		expect(wrapper.exists('input')).toBeTruthy();

		const attrs = wrapper.find('input').props();
		expect(attrs.type).toBe('text');
		expect(attrs.name).toBe('test name');

	});

});
