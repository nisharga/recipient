import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: false }}
            initialRouteName='Splash'
        >
            <Stack.Screen name='Splash' component={SplashScreen} />
            {/* <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Root" component={AuthStack} />
      <Stack.Screen name="NoAuthStack" component={NoAuthStack} /> */}
        </Stack.Navigator>
    );
};

export default MainStack;
