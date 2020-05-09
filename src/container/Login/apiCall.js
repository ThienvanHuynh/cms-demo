const delayConfigSuccess = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const loginCallApi = () => {
  return delayConfigSuccess(1000)
    .then(() => {
      return {
        status: 200,
        data: [
          {
            id: 1,
            name: "Oi",
            quantity: 30,
          },
          {
            id: 2,
            name: "Xoai",
            quantity: 10,
          },
          {
            id: 3,
            name: "Dua",
            quantity: 5,
          },
        ],
      };
    })
    .catch(() => {
      return { errMess: "Lỗi rồi." };
    });
};
