const fnDecrypt = (wordEncrypt = '') => {
	let wordDecrypt = '';
	let newArrEncrypt = [];

	for (let i = 0; i < wordEncrypt.length; i++) {
		newArrEncrypt.push(wordEncrypt.charAt(i));
	}

	if (wordEncrypt.length === 1) {
		wordDecrypt = wordEncrypt;
	} else if (wordEncrypt.length > 1) {
		const arrWord = [];

		while (newArrEncrypt.length > 0) {
			if (newArrEncrypt.length % 2 === 0) {
				let firstLetter = getFirstLetter(newArrEncrypt);
				let secondLetter =
					getSecondLetter(newArrEncrypt);
				newArrEncrypt.splice(
					newArrEncrypt.indexOf(firstLetter),
					1,
				);
				newArrEncrypt.splice(
					newArrEncrypt.indexOf(secondLetter),
					1,
				);
				arrWord.push(firstLetter, secondLetter);
			} else {
				let firstLetter = getFirstLetter(
					newArrEncrypt,
					true,
				);
				let secondLetter = getSecondLetter(
					newArrEncrypt,
					true,
				);
				newArrEncrypt.splice(
					newArrEncrypt.indexOf(firstLetter),
					1,
				);
				newArrEncrypt.splice(
					newArrEncrypt.indexOf(secondLetter),
					1,
				);
				arrWord.push(firstLetter, secondLetter);
			}
		}
		wordDecrypt = arrWord.toString().replace(/,/g, '');
	}

	return wordDecrypt;
};

const getFirstLetter = (arreglo = [], impar = false) => {
	return impar === false
		? arreglo[arreglo.length / 2 - 1]
		: arreglo[arreglo.length / 2 - 1 + 0.5];
};

const getSecondLetter = (arreglo = [], impar = false) => {
	return impar === false
		? arreglo[arreglo.length / 2]
		: arreglo[arreglo.length / 2 + 0.5];
};

export { fnDecrypt };
