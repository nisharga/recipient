import ArrowIcon from '@/static';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const SliderOne = ({ handleNext, handleSkip }: any) => {
    return (
        <View className=' w-full'>
            <View className='mt-40 p-10'>
                <Image
                    className='w-full h-auto'
                    source={require('../../../../assets/images/onboarding/SliderOne.png')}
                />
            </View>
            <View className=''>
                <View className='text-center p-10'>
                    <View className='flex flex-row items-center justify-center gap-1'>
                        <Text className='text-2xl font-semibold'>
                            Locate Nearby
                        </Text>
                        <Text className='text-[#004ABB] text-2xl font-semibold'>
                            Mechanics
                        </Text>
                    </View>
                    <Text className='text-[#6D6D6D] text-sm text-center py-3 px-4'>
                        Stranded? No problem. With our location-based services,
                        find the nearest mechanic to help with any car trouble,
                        anytime.
                    </Text>
                </View>
                <View className='flex items-center justify-center'>
                    <TouchableOpacity
                        onPress={handleNext}
                        className='py-4 px-16 bg-[#D93030] rounded-[48px] cursor-pointer mb-2'
                    >
                        <Text className='text-white text-center'>Next</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSkip}
                        className='py-4 rounded-[48px] flex flex-row gap-2 items-center justify-center cursor-pointer'
                    >
                        <Text className='text-[#6D6D6D] text-center items-center justify-center'>
                            Skip
                        </Text>
                        <View className='border rounded-full p-2.5 border-[#E7E7E7]'>
                            <ArrowIcon />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SliderOne;
