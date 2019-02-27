import React, { useEffect } from 'react';

import { IMessage } from 'ui/Notification/types/message';
import { TVariant } from 'ui/Theme/types';
import { useShow } from 'ui/Notification/hooks/useShow';
import { List } from 'ui/Notification/sc/List';
import { Message } from 'ui/Notification/sc/Message';
import { IconClose } from 'ui/Icon/components/IconClose';
import { colors } from 'ui/Theme/colors';

interface IProps {
	messages: Array<IMessage>;
	variant?: TVariant;
}

export const Notification = React.memo(({ messages, variant = 'default' }: IProps) => {

	const [showMessages, updateId, changeVisibleMessage, setNewMessages] = useShow({ messages });

	useEffect(() => {

		setNewMessages(messages);

	}, [messages]);

	if (!showMessages.length) {

		return null;

	}

	return (
		<List>
			{showMessages.map((item, index) => (
				<Message
					key={`${updateId}-${index}`}
					data-index={index}
					delay={index ? index / 10 : 0}
					variant={variant}
					onClick={changeVisibleMessage}
				>
					<IconClose
						color={colors.black}
						width={'10px'}
						height={'10px'}
					/>
					{item.message}
				</Message>
			))}
		</List>
	);

});
