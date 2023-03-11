const fnEncrypt = (wordDecrypt = '') => {
	let wordEncrypt;
	let arrayWordDecrypt = [];

	if (wordDecrypt.length === 1) {
		wordEncrypt = wordDecrypt;
	} else if (wordDecrypt.length > 1) {
		for (let i = 0; i < wordDecrypt.length; i++) {
			arrayWordDecrypt.push(wordDecrypt.charAt(i));
		}

		let arrayWordEncrypt = [];

		let firstLetter = arrayWordDecrypt[0];
		let secondLetter = arrayWordDecrypt[1];

		arrayWordDecrypt.splice(0, 2);

		arrayWordEncrypt.push(firstLetter, secondLetter);

		for (let i = 0; i < arrayWordDecrypt.length; i++) {
			if (i % 2 === 0) {
				arrayWordEncrypt.unshift(arrayWordDecrypt[i]);
			} else {
				arrayWordEncrypt.push(arrayWordDecrypt[i]);
			}
		}
		console.log(
			arrayWordDecrypt,
			{
				firstLetter,
				secondLetter,
				arrayWordEncrypt,
			},
			arrayWordDecrypt.length,
			arrayWordEncrypt,
		);

		wordEncrypt = arrayWordEncrypt
			.toString()
			.replace(/,/g, '');
	}

	return wordEncrypt;
};

export { fnEncrypt };
