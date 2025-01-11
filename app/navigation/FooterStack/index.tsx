import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '@/app/screens/HomeScreen/HomeScreen';
import SearchScreen from '@/app/screens/SearchScreen/SearchScreen';
import NotificationScreen from '@/app/screens/NotificationScreen/NotificationScreen';

// ... TabStackNavigator remains the same ...

const Tab = createBottomTabNavigator();
const TabStack = createNativeStackNavigator();

const TabStackNavigator = () => {
    return (
        <TabStack.Navigator screenOptions={{ headerShown: false }}>
            <TabStack.Screen name='HomeMain' component={HomeScreen} />
        </TabStack.Navigator>
    );
};

const FooterStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8
                },
                tabBarActiveTintColor: '#D93030', // Matching your app's red color
                tabBarInactiveTintColor: 'gray'
            }}
            initialRouteName='Home'
        >
            <Tab.Screen
                name='Home'
                component={TabStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='home-outline'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Search'
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='search-outline'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Notifications'
                component={NotificationScreen}
                options={{
                    tabBarLabel: 'Notifications',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='notifications-outline'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default FooterStack;
