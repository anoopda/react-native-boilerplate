const initialState = {
    count: 0
}
export const sample = {
    state: {
        ...initialState
    },
    reducers: {
        updateCount(state,{count}) {
             state.count = count;
             return state;
        },
    },
    effects: (dispatch) => {
        return {
            // async checkPrevLogin(payload, rootState) {
            //     debugger;
            //     await removeData('userData');      
            //     const userData = await retrieveData('userData');
            //     if (!!userData.success) {
            //         dispatch.user.updateUserData(userData.data);
            //         navigate('UserLogScreen');
            //     } else {
            //         navigate('AppStackScreen')
            //     }
            // },
            // initiateAppReady() {
            //     dispatch.app.checkPrevLogin();
            // }
        }
    }
}