import { generateRandomValue } from 'utils/random';
import { IArguments, IResponse } from 'api/request/type';

const alwaysError = false;

export const request = async <T>(
	args: IArguments<T>
): Promise<IResponse<T>> => {

	const { response } = args;

	if (alwaysError) {

		return {
			status: 500,
			errors: [{
				message: 'some error',
				code:    1
			}]
		};

	}

	await new Promise(resolve => {

		setTimeout(() => resolve(response), generateRandomValue({
			min: 500,
			max: 3000
		}));

	});

	return response;

};
