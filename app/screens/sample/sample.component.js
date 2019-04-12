import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
const SampleScreen = (props) => {
  const {
    updateCount,
    handlelogout,
    sample: {
      count
    } } = props;

  const onButtonPress = () => {
    updateCount && updateCount(count + 1);
  }

  const onPressLogoutBtn = () =>{
    handlelogout && handlelogout();
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Sample Screeen</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={onButtonPress}>
          <Text>Press {count}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressLogoutBtn}>
          <Text>Logout</Text>
        </TouchableOpacity>
    
      </View>
    </View>
  )
}

export default SampleScreen;








