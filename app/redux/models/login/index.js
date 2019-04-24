import { storeData, removeData } from '../../../utils/storage';
import { navigate } from '../../../router/navigationService';

const initialState = {
    error: ''
};

const mockPromise = () => new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                {
                    success: 'true',
                    data: {
                        token: 'asdsdsds'
                    }
                }
        );
        }, 2000);
    });


export const login = {
    state: {
        ...initialState
    },
    reducers: {
        onLoginErr(state) {
            state.error = 'Login Error';
            return state;
        },
        clearLoginErr(state) {
            state.error = '';
            return state;
        }
    },
    effects: (dispatch) => {
        const {
            login: {
            onLoginErr,
            clearLoginErr
        },
        user: {
            updateUserData,
            clearUserData,
            updateAuthorisationStatus
        }
    } = dispatch;
        return {
            async handleLoginSucess(userData) {
                const { success } = await storeData('userData', userData);
                updateUserData(userData);
                navigate('SampleScreen');
            },
            async handlelogin() {
                try{
                    clearLoginErr();
                    const response = await mockPromise();
                    if( response.success && response.data && response.data.token ){
                        dispatch.login.handleLoginSucess(response.data);
                    }else{
                        onLoginErr()
                    }
                }catch(err){
                    onLoginErr();
                }
            },
            async handlelogout(payload,rootState){
                await removeData('userData');
                clearUserData();
                updateAuthorisationStatus(false);
                navigate('LoginScreen')
            }
        }
    }
}


