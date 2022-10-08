export async function getResultsMock() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          exit: 1,
          probability: 0.585258,
        },
      });
    }, 1500);
  });
}
