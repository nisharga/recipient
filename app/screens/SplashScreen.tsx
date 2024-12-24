import { useEffect } from 'react';
import { View, Text } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
    useEffect(() => {
        // Replace with your authentication logic
        const isAuthenticated = true;

        setTimeout(() => {
            if (isAuthenticated) {
                navigation.replace('Root'); // Redirect to AuthStack
            } else {
                navigation.replace('NoAuthStack'); // Redirect to NoAuthStack
            }
        }, 2000); // Simulate splash screen delay
    }, [navigation]);

    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Loading...</Text>
        </View>
    );
};

export default SplashScreen;
