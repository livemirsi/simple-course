import { useState } from 'react';

import { IMessage, IMouseEvent } from 'ui/Notification/types/message';

interface IProps {
	messages: Array<IMessage>;
}

type IOutput = [Array<IMessage>, IMouseEvent];

export const useShow = ({ messages }: IProps): IOutput => {

	const [showMessages, setVisibleMessage] = useState(messages);

	const changeVisibleMessage: IMouseEvent = ({ target }) => {

		const element = target as HTMLDivElement;

		const indexElement = element.getAttribute('data-index');
		const numberIndexElement = parseInt(indexElement || '', 10);

		if (!isNaN(numberIndexElement)) {

			setVisibleMessage(showMessages.filter((item, index) => index !== numberIndexElement));

		}

	};

	return [showMessages, changeVisibleMessage];

};
