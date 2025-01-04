import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '@/app/screens/OnBoarding/OnBoarding';
import ProfileScreen from '@/app/screens/ProfileScreen/ProfileScreen';
import SignInScreen from '@/app/screens/SignInScreen/SignInScreen';
import SignUpScreen from '@/app/screens/SignUpScreen/SignUpScreen';
import VerificationScreen from '@/app/screens/VerificationScreen/VerificationScreen';
import CustomDrawer from '@/app/components/CustomDrawer';
import SettingsScreen from '@/app/screens/SettingsScreen/SettingsScreen';
import AboutScreen from '@/app/screens/AboutScreen/AboutScreen';

// Auth flow screens (without drawer)
const AuthStack = createNativeStackNavigator();
const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: false }}
        >
            <AuthStack.Screen name='OnBoarding' component={OnBoarding} />
            <AuthStack.Screen name='SignIn' component={SignInScreen} />
            <AuthStack.Screen name='SignUp' component={SignUpScreen} />
            <AuthStack.Screen
                name='Verification'
                component={VerificationScreen}
            />
        </AuthStack.Navigator>
    );
};

// Drawer navigation
const Drawer = createDrawerNavigator();
const NoAuthStack = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerPosition: 'left',
                drawerStyle: {
                    width: 280 // Customize drawer width
                }
            }}
            initialRouteName='Auth'
        >
            <Drawer.Screen name='Auth' component={AuthStackNavigator} />
            <Drawer.Screen name='Profile' component={ProfileScreen} />
            <Drawer.Screen name='About' component={AboutScreen} />
            <Drawer.Screen name='Settings' component={SettingsScreen} />
        </Drawer.Navigator>
    );
};

export default NoAuthStack;
