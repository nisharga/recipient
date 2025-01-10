/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Pressable,
    Text,
    Button,
    TextInput
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSequence,
    cancelAnimation,
    FadeIn,
    FadeOut,
    withSpring,
    FadeInLeft
} from 'react-native-reanimated';

const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const AboutScreen = () => {
    const translateX = useSharedValue(0);

    const handlePress = () => {
        translateX.value = withSpring(translateX.value + 50);
    };
    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles?.box, { transform: [{ translateX }] }]}
            />
            <Button onPress={handlePress} title='Click me' />

            <AnimatedInput
                style={[{ height: 50, width: 200, backgroundColor: 'red' }]}
            />
            <Animated.Text
                entering={FadeInLeft.duration(500).delay(400)}
                style={{ fontWeight: 'bold', fontSize: 18, padding: 16 }}
            >
                Title
            </Animated.Text>
            <Animated.Text
                entering={FadeInLeft.duration(500).delay(800)}
                style={{ fontWeight: 'bold', fontSize: 18, padding: 16 }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                maxime?
            </Animated.Text>

            <Animated.Image
                className='w-[100px] h-[100px]'
                source={require('../../../assets/images/onboarding/one.png')}
                sharedTransitionTag='image-1'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'violet'
    }
});

export default AboutScreen;
