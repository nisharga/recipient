import { View, ActivityIndicator } from 'react-native';
import React from 'react';

const SplashScreen = () => {
    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                backgroundColor: 'blue'
            }}
        >
            <ActivityIndicator size={'large'} />
        </View>
    );
};

export default SplashScreen;
