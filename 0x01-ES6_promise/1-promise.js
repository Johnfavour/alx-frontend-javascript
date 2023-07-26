function getFullResponseFromAPI(boolean) {
	return new Promise((resolve, reject) => {
		if (boolean) {
			resolve ({
				status: 200,
				body: 'Success'});
		} else {
			reject(new Error('The fake API is not working currently'));
		}
	});
}
