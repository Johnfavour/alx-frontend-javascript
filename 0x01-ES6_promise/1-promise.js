export default function (boolean) {
  return new Promise((resolve, reject) => {
    const arg = {
      status: 200,
      body: 'Success',
    };

    if (boolean === true) {
      resolve(arg);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
