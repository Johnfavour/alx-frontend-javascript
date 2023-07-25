function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataFromAPI = { message: "This is the response from the API." };
      resolve(dataFromAPI); 
    }, 2000); 
  });
}

export default getResponseFromAPI;
