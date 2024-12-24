import React, { useRef, useState } from 'react';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SliderOne from './Sliders/SliderOne';
import SliderTwo from './Sliders/SliderTwo';
import SliderThree from './Sliders/SliderThree';
import { View } from 'react-native';

export type RootStackParamList = {
    OnBoarding: undefined;
    SignIn: undefined;
    // Add other routes if needed
};

const OnBoarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    type NavigationProps = NativeStackNavigationProp<
        RootStackParamList,
        'OnBoarding'
    >;
    const navigation = useNavigation<NavigationProps>(); // React Navigation hook for routing

    const handleNext = () => {
        if (activeIndex === 2) {
            // Navigate to login if the index is 2
            navigation.navigate('SignIn');
        } else {
            // Otherwise, go to the next slide
            swiperRef.current?.scrollBy(1);
        }
    };
    const handleSkip = () => {
        navigation.navigate('SignIn');
    };

    return (
        <View className='flex h-full items-center justify-between bg-white relative '>
            <Swiper
                ref={swiperRef}
                loop={true} // Set loop to false so it doesn't circle back
                autoplay={false}
                dot={
                    <View
                        className={`w-[80px] h-[6px] mx-1 bg-[#D4F0FF] rounded-full mb-[690px]`}
                    />
                }
                activeDot={
                    <View
                        className={`w-[80px] h-[6px] mx-1 bg-[#004ABB] rounded-full mb-[690px]`}
                    />
                }
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {/* Slide 1 */}
                <SliderOne handleNext={handleNext} handleSkip={handleSkip} />

                {/* Slide 2 */}
                <SliderTwo handleNext={handleNext} handleSkip={handleSkip} />

                {/* Slide 3 */}
                <SliderThree handleNext={handleNext} handleSkip={handleSkip} />
            </Swiper>
        </View>
    );
};

export default OnBoarding;
