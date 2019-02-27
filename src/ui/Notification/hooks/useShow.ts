import { useState } from 'react';

import { IMessage, IMouseEvent } from 'ui/Notification/types/message';

interface IProps {
	messages: Array<IMessage>;
}

interface ISetNewMessages {
	(newMessages: Array<IMessage>):void
}

type IOutput = [Array<IMessage>, number, IMouseEvent, ISetNewMessages];

export const useShow = ({ messages }: IProps): IOutput => {

	const [{ updateId, showMessages }, setVisibleMessage] = useState({
		updateId:     0,
		showMessages: messages
	});

	const changeVisibleMessage: IMouseEvent = ({ target }) => {

		const element = target as HTMLDivElement;

		const indexElement = element.getAttribute('data-index');
		const numberIndexElement = parseInt(indexElement || '', 10);

		if (!isNaN(numberIndexElement)) {

			setVisibleMessage({
				updateId,
				showMessages: showMessages.filter((item, index) => index !== numberIndexElement)
			});

		}

	};

	const setNewMessages: ISetNewMessages = newMessages => {

		setVisibleMessage({
			updateId:     updateId + 1,
			showMessages: newMessages
		});

	};

	return [showMessages, updateId, changeVisibleMessage, setNewMessages];

};
