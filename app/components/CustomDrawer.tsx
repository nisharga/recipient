import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerContentComponentProps
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawer = (props: DrawerContentComponentProps) => {
    const menuItems = [
        { icon: 'home-outline', title: 'Home', route: 'Auth' },
        { icon: 'person-outline', title: 'Profile', route: 'Profile' },

        {
            icon: 'log-out-outline',
            title: 'About Screen',
            route: 'About'
        },
        {
            icon: 'settings-outline',
            title: 'Settings',
            route: 'Settings'
        }
    ];

    return (
        <DrawerContentScrollView {...props} style={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileSection}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/150' }}
                    style={styles.profileImage}
                />
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>john@example.com</Text>
            </View>

            {/* Menu Items */}
            <View style={styles.menuContainer}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.menuItem,
                            props.state.index === index && styles.activeMenuItem
                        ]}
                        onPress={() => props.navigation.navigate(item.route)}
                    >
                        <Ionicons
                            name={item.icon as any}
                            size={24}
                            color={
                                props.state.index === index ? '#fff' : '#333'
                            }
                        />
                        <Text
                            style={[
                                styles.menuText,
                                props.state.index === index &&
                                    styles.activeMenuText
                            ]}
                        >
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    profileSection: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        alignItems: 'center'
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5
    },
    userEmail: {
        fontSize: 14,
        color: '#666'
    },
    menuContainer: {
        paddingTop: 20
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 5,
        borderRadius: 8,
        marginHorizontal: 8
    },
    activeMenuItem: {
        backgroundColor: '#007AFF'
    },
    menuText: {
        marginLeft: 16,
        fontSize: 16,
        color: '#333'
    },
    activeMenuText: {
        color: '#fff'
    }
});

export default CustomDrawer;
