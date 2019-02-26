import { TVariant } from 'ui/Theme/types';

export const colors = {
	white: '#fff',
	black: '#4f4f4f',
	grey:  '#ccc',
	blue:  '#4286f4',
	red:   '#f44542'
};

export const getColorByStatus = (variant: TVariant) => {

	switch (variant) {

		case 'default' :
			return colors.blue;

		case 'error' :
			return colors.red;

		default :
			return '#ccc';

	}

};

