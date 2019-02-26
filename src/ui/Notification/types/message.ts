import { MouseEvent } from 'react';

export interface IMessage {
	message: string
}

export type IMouseEvent = ({ target }: MouseEvent<HTMLDivElement>) => void;
