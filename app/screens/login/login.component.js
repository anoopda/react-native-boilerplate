import React from 'react';
import {
     View, Text, TextInput, TouchableOpacity
} from 'react-native';
import { formLogic } from '../../hoc/form';

const initialFieldState = {
    email:''
}

const initialErrState = {
    emailErr:''
}

const config = {
    fields :[{
        field: 'email',
        emptyValidation: true,
        emptyErrMsg: 'Please enter email',
        regexValidation: false
      }]
}

const LoginScreen = (props) => {
    const { fieldState, 
            errState, 
            updatefieldState,
            checkEmptyValidation
         } = formLogic({initialFieldState,initialErrState,config});

    const handleOnChange = (key) => (text) => {
        updatefieldState(key,text);
    };

    const handleLoginPress = () => {
        const { handlelogin } = props;
        if(checkEmptyValidation && checkEmptyValidation()){
            handlelogin && handlelogin();
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center'}}>
            <Text style={{textAlign:'center',paddingVertical:20}}>Login</Text>
           <View style={{ flex: 1, justifyContent: 'center',alignItems:'center'}} > 
            <TextInput
                style={{ width:'80%',height:40,borderBottomWidth:1,borderColor:'black' }}
                value={fieldState.email}
                onChangeText={handleOnChange('email')}
            />
            <Text>{errState.emailErr}</Text>
            <TouchableOpacity onPress={handleLoginPress}>
                <Text>Login</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

export default React.memo(LoginScreen);

