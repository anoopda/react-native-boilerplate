import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';

import SplashScreenView from '../screens/splash';
import SampleScreenView from '../screens/sample';
import LoginScreenView from '../screens/login';

const MainAppStack = createStackNavigator({
    SampleScreen: SampleScreenView,
},{
    initialRouteName: 'SampleScreen',
});

const AuthStack = createStackNavigator({
    LoginScreen:LoginScreenView
},{
    initialRouteName: 'LoginScreen',
});

const AuthSwitch = createSwitchNavigator({
    AuthStackScreen: AuthStack,
    MainAppStackScreen: MainAppStack
});

const SplashSwitch = createSwitchNavigator({
    SplashScreen: SplashScreenView,
    AuthSwitchScreen: AuthSwitch
},{
    initialRouteName: 'SplashScreen',
});

export default createAppContainer(SplashSwitch);
