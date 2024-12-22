import HomeScreen from '@/app/screens/HomeScreen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type AuthStackParamList = {
    Home: undefined;
    ToDoScreen: { id: string };
    UserEditScreen: { id: string };
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: false }}
            initialRouteName='Home'
        >
            <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default AuthStack;
