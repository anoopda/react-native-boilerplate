import React, { useState } from 'react';
import {
     View, Text, TextInput, TouchableOpacity
} from 'react-native';

const LoginScreen = (props) => {
    const [email, setStateEmail] = useState('');
    const handleOnChange = (text) => {
        setStateEmail({ email: text });
    };

    const handleLoginPress = () => {
        const { handlelogin } = props;
        handlelogin && handlelogin();
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center'}}>
            <Text style={{textAlign:'center',paddingVertical:20}}>Login</Text>
           <View style={{ flex: 1, justifyContent: 'center',alignItems:'center'}} > 
            <TextInput
                style={{ width:'80%',height:40,borderBottomWidth:1,borderColor:'black' }}
                value={email}
                onChange={handleOnChange}
            />
            <TouchableOpacity onPress={handleLoginPress}>
                <Text>Login</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;

