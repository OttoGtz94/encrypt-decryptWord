/*  
    nube        --> bnue
    teclado     --> oacteld
    bocina      --> ncboia
    trabajo     --> oaatrbj
    abcdefghijklmnopq   --> qomkigecabdfhjlnp
    laptop --> oplatp
    fortunate   --> eaurfotnt
    confident   --> teincofdn
    developer   --> rplvdeeoe
    ingles      --> eginls
*/
import { fnDecrypt } from './scripts/decrypt.js';
import { fnEncrypt } from './scripts/encrypt.js';
import {
	inquirerMenu,
	pause,
	readInput,
} from './scripts/inquirer.js';

const main = async () => {
	let opt;
	do {
		opt = await inquirerMenu();

		switch (opt) {
			case 1:
				const wordDecrypt1 = await readInput(
					'Ingrese la palabra a encriptar',
					'encriptar',
				);
				const wordEncrypt1 = fnEncrypt(wordDecrypt1);
				console.log(
					`La palabra encriptada es: ${wordEncrypt1}`,
				);
				break;
			case 2:
				const wordEncrypt2 = await readInput(
					'Ingrese palabra a desencriptar',
					'desencriptar',
				);
				const wordDecrypt2 = fnDecrypt(wordEncrypt2);
				console.log(
					`La palabra ${wordEncrypt2} desencriptada es: ${wordDecrypt2}`,
				);
				break;
			default:
				break;
		}

		if (opt !== 0) await pause();
	} while (opt !== 0);
};

main();
