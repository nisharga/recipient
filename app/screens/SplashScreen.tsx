import { useEffect } from 'react';
import { View, Image } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
    useEffect(() => {
        // Replace with your authentication logic
        const isAuthenticated = false;

        setTimeout(() => {
            if (isAuthenticated) {
                navigation.replace('Root'); // Redirect to AuthStack
            } else {
                navigation.replace('NoAuthStack'); // Redirect to NoAuthStack
            }
        }, 2000); // Simulate splash screen delay
    }, [navigation]);

    return (
        <View className='h-full flex items-center justify-center relative'>
            <View className='w-[302px] h-[331px] absolute -left-[120px] -top-[160px] z-20'>
                <Image
                    className='w-full h-full'
                    source={require('../../assets/images/onboarding/one.png')}
                />
            </View>
            <View className='w-[279px] h-[331px] absolute -left-[40px] -top-[120px] z-10'>
                <Image
                    className='w-full h-full'
                    source={require('../../assets/images/onboarding/two.png')}
                />
            </View>
            <View className='w-[244px] h-[133px]'>
                <Image
                    className='w-full h-full'
                    source={require('../../assets/images/onboarding/logo.png')}
                />
            </View>
            <View className='w-[431px] h-[510px] absolute -right-[220px] -bottom-[220px] z-10'>
                <Image
                    className='w-full h-full'
                    source={require('../../assets/images/onboarding/four.png')}
                />
            </View>
        </View>
    );
};

export default SplashScreen;
