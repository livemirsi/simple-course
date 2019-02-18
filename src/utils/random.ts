interface IArguments {
	min: number;
	max: number;
}

export const generateRandomValue = ({ min, max }: IArguments): number => {

	return Math.random() * (max - min) + min;

};
