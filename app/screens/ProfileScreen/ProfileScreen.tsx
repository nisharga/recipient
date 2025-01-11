import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TopTabNavigator } from '@/app/navigation/TopTabNavigator';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <TopTabNavigator />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default ProfileScreen;
