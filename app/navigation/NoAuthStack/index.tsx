import OnBoarding from '@/app/screens/OnBoarding/OnBoarding';
import SignInScreen from '@/app/screens/SignInScreen/SignInScreen';
import SignUpScreen from '@/app/screens/SignUpScreen/SignUpScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type NoAuthStackParamList = {
    OnBoarding: undefined;
    SignIn: undefined;
    SignUp: undefined;
};

const Stack = createNativeStackNavigator<NoAuthStackParamList>();

const NoAuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: false }}
            initialRouteName='OnBoarding'
        >
            <Stack.Screen name='OnBoarding' component={OnBoarding} />
            <Stack.Screen name='SignIn' component={SignInScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
        </Stack.Navigator>
    );
};

export default NoAuthStack;