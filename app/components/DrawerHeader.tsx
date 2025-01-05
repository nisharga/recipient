import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    title: string;
};

const DrawerHeader = ({ title }: Props) => {
    const navigation = useNavigation<DrawerNavigationProp<any>>();

    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.toggleDrawer()}
            >
                <Ionicons name='menu-outline' size={24} color='#333' />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 2
    },
    menuButton: {
        padding: 8
    },
    title: {
        marginLeft: 16,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    }
});

export default DrawerHeader;
