function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API call (you would replace this with the actual API call)
    setTimeout(() => {
      // Assuming the API call is successful
      const dataFromAPI = { message: "This is the response from the API." };
      resolve(dataFromAPI); // Resolve the promise with the data
    }, 2000); // Simulate a 2-second delay
  });
}

export default getResponseFromAPI;
