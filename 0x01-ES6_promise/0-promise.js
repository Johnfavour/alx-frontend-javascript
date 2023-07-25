function getResponseFromAPI() {
	  return new Promise((resolve, reject) => {
    setTimeout(() => {
	          const responseData = { message: 'Hello from the API!' };
	    resolve(responseData);
	     }, 2000);
  });
}
getResponseFromAPI()
  .then(responseData => {
	    console.log(responseData);
  })
  .catch(error => {
	   console.error('Error:', error.message);
  });
