import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuButton from '@/app/components/MenuButton';

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <MenuButton />
            <View style={styles.content}>
                <Text>Settings Screen</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SettingsScreen;
