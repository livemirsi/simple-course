import React from 'react';
import { Notification } from 'ui/Notification/Notification';
import { render, fireEvent } from 'react-testing-library';

describe('ui/Notification', () => {

	const {
		getByText, queryByText, queryAllByText, rerender
	} = render(
		<Notification messages={[{ message: 'test one message' }]} />
	);

	test('render one message', () => {

		expect(queryByText('test one message')).not.toBe(null);

	});

	test('render tree messages', () => {

		const messages = [
			{ message: 'test message' },
			{ message: 'test message' },
			{ message: 'test message' }
		];
		rerender(<Notification messages={messages} />);
		expect(queryAllByText('test message').length).toBe(3);

	});

	test('remove messages', () => {

		const messages = [
			{ message: 'test message1' },
			{ message: 'test message2' },
			{ message: 'test message3' }
		];
		rerender(<Notification messages={messages} />);

		const firstMessage = getByText('test message1');
		fireEvent.click(firstMessage);
		expect(queryByText('test message1')).toBe(null);
		expect(queryByText('test message2')).not.toBe(null);
		expect(queryByText('test message3')).not.toBe(null);

		const secondMessage = getByText('test message2');
		fireEvent.click(secondMessage);
		expect(queryByText('test message1')).toBe(null);
		expect(queryByText('test message2')).toBe(null);
		expect(queryByText('test message3')).not.toBe(null);

		const thirdMessage = getByText('test message3');
		fireEvent.click(thirdMessage);
		expect(queryByText('test message1')).toBe(null);
		expect(queryByText('test message2')).toBe(null);
		expect(queryByText('test message3')).toBe(null);

	});

});

