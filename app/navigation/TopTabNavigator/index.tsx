import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

// First Tab Screen Component
const TabOneScreen = () => (
    <View style={styles.screenContainer}>
        <Text>Tab One Content</Text>
    </View>
);
TabOneScreen.displayName = 'TabOneScreen';

// Second Tab Screen Component
const TabTwoScreen = () => (
    <View style={styles.screenContainer}>
        <Text>Tab Two Content</Text>
    </View>
);
TabTwoScreen.displayName = 'TabTwoScreen';

// Custom Tab Bar Component
const CustomTabBar = ({ state, descriptors, navigation }: any) => {
    return (
        <View className='px-24'>
            <View
                className='!bg-[#004ABB] rounded-full text-white'
                style={styles.tabContainer}
            >
                {state.routes.map((route: any, index: number) => {
                    const { options } = descriptors[route.key];
                    const label = options.title || route.name;
                    const isFocused = state.index === index;

                    const onPress = () => {
                        navigation.navigate(route.name);
                    };

                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={onPress}
                            style={[styles.tab, isFocused && styles.activeTab]}
                        >
                            <Text
                                style={[
                                    styles.tabText,
                                    isFocused && styles.activeTabText
                                ]}
                            >
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

const TopTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
                swipeEnabled: true
            }}
        >
            <Tab.Screen
                name='TabOne'
                component={TabOneScreen}
                options={{ title: 'First' }}
            />
            <Tab.Screen
                name='TabTwo'
                component={TabTwoScreen}
                options={{ title: 'Second' }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
        paddingVertical: 4,
        paddingHorizontal: 2,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        marginHorizontal: 4
    },
    activeTab: {
        backgroundColor: '#D93030'
    },
    tabText: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500'
    },
    activeTabText: {
        color: '#fff'
    },
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export { TopTabNavigator };
