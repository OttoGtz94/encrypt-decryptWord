import inquirer from 'inquirer';

const questions = [
	{
		type: 'list',
		name: 'option',
		message: 'Qué desea hacer?',
		choices: [
			{ value: 1, name: 'Encriptar palabra' },
			{
				value: 2,
				name: 'Desencriptar palabra',
			},
			{
				value: 0,
				name: 'Salir',
			},
		],
	},
];

const inquirerMenu = async () => {
	console.clear();
	console.log('Selecciona una opción:');

	const { option } = await inquirer.prompt(questions);
	return option;
};

const pause = async () => {
	const question = [
		{
			type: 'input',
			name: 'enter',
			message: 'Presiona enter para salir',
		},
	];

	console.log('\n');
	await inquirer.prompt(question);
};

const readInput = async (message, typeMessage) => {
	const question = [
		{
			type: 'input',
			name: 'word',
			message,
			validate(value) {
				if (value.length === 0) {
					return `Por favor, ingrese palabra a ${typeMessage}`;
				}
				return true;
			},
		},
	];

	const { word } = await inquirer.prompt(question);
	return word;
};

export { inquirerMenu, pause, readInput };
