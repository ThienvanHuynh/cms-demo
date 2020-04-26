const delayConfigSuccess = ms => new Promise(resolve => setTimeout(resolve, ms));

export const getUserCallApi = () => {
    return delayConfigSuccess(1000)
        .then(() => {
            return {
                status: 200,
                data: [
                    {
                        id: 1,
                        name: 'Thien',
                        level: 30,
                    },
                    {
                        id: 2,
                        name: 'Van',
                        level: 10,
                    },
                    {
                        id: 3,
                        name: 'Huynh',
                        level: 5,
                    },
                ],
            };
        })
        .catch(() => {
            return { errMess: 'Lỗi rồi.' };
        });
};