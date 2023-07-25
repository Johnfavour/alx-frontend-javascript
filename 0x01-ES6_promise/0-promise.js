function YourConstructor() {
  YourConstructor.prototype.getResponseFromAPI = function () {
   
    return new Promise((resolve, reject) => {
      
      fetch('https://api.example.com/data')
        .then(response => {
          if (!response.ok) {
           
            reject(new Error('Request failed with status ' + response.status));
          } else {
            
            return response.json();
          }
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
   
          reject(error);
        });
    });
  };
}
