import React from 'react';

import { IMessage } from 'ui/Notification/types/message';
import { useShow } from 'ui/Notification/hooks/useShow';
import { List } from 'ui/Notification/sc/List';
import { Message } from 'ui/Notification/sc/Message';
import { IconClose } from 'ui/Icon/components/IconClose';

interface IProps {
	messages: Array<IMessage>;
	variant?: 'success' | 'error';
}

export const Notification = ({ messages }: IProps) => {

	const [showMessages, changeVisibleMessage] = useShow({ messages });

	if (!showMessages.length) {

		return null;

	}

	return (
		<List>
			{showMessages.map((item, index) => (
				<Message
					key={index}
					data-index={index}
					delay={index ? index / 10 : 0}
					onClick={changeVisibleMessage}
				>
					<IconClose
						width={'10px'}
						height={'10px'}
					/>
					{item.message}
				</Message>
			))}
		</List>
	);

};
