import { TVariant } from 'ui/theme/type';

export const colors = {
	blue: '#4286f4',
	red:  '#f44542'
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

