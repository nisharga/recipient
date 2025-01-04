import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const MenuButton = () => {
    const navigation = useNavigation<DrawerNavigationProp<any>>();

    return (
        <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.toggleDrawer()}
        >
            <Ionicons name='menu-outline' size={24} color='#333' />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    menuButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        padding: 10,
        zIndex: 1
    }
});

export default MenuButton;
