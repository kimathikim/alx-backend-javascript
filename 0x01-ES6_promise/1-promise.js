export default function getResponseAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        message: "OK",
      }
      );
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
