import { Text, View } from 'react-native';
import React from 'react';
import { BackButton } from '@/app/components';
import NumberPicker from './NumberPicker';

const SignUpScreen = () => {
    return (
        <View className='py-6'>
            <View className='px-8 relative mb-10'>
                <Text className='title mb-3 text-center'>Registration</Text>
                <Text className='content text-center mb-8'>Welcome Back!</Text>
                <Text className='content text-center px-[48px]'>
                    Enter your registered phone number to log in
                </Text>
                <View className='absolute left-4 top-0'>
                    <BackButton routePath='SignIn' />
                </View>
            </View>
            <NumberPicker />
        </View>
    );
};

export default SignUpScreen;
