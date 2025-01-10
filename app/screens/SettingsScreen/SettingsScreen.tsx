/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Text, Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withDelay
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

// Sample data
const DATA = Array.from({ length: 10 }, (_, i) => ({
    id: i.toString(),
    title: `Title ${i + 1}`,
    image: `https://via.placeholder.com/150?text=Image+${i + 11}`
}));

const SettingsScreen = () => {
    return (
        <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
                <AnimatedListItem item={item} index={index} />
            )}
            contentContainerStyle={styles.container}
        />
    );
};

const AnimatedListItem = ({ item, index }: { item: any; index: number }) => {
    const translateY = useSharedValue(50);
    const opacity = useSharedValue(0);

    useEffect(() => {
        translateY.value = withDelay(
            index * 100,
            withTiming(0, { duration: 500 })
        );
        opacity.value = withDelay(
            index * 100,
            withTiming(1, { duration: 500 })
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
        opacity: opacity.value
    }));

    return (
        <Animated.View style={[styles.itemContainer, animatedStyle]}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    },
    itemContainer: {
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 10,
        width: width * 0.9,
        alignSelf: 'center',
        elevation: 5, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    title: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default SettingsScreen;
