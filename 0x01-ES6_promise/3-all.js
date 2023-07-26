export function uploadPhoto() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ body: 'Uploaded photo' }), 2000);
  });
}

export function createUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ firstName: 'John', lastName: 'Doe' }), 1500);
  });
}
