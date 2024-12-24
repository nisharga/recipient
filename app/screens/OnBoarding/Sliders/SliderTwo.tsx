import ArrowIcon from '@/static';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const SliderTwo = ({ handleNext, handleSkip }: any) => {
    return (
        <View className=' w-full'>
            <View className='mt-20 p-10'>
                <Image
                    className='w-full h-auto'
                    source={require('../../../../assets/images/onboarding/SliderTwo.png')}
                />
            </View>
            <View className=''>
                <View className='text-center p-10'>
                    <View className='flex flex-row items-center justify-center gap-1'>
                        <Text className='text-2xl font-semibold'>
                            Track and
                        </Text>
                        <Text className='text-[#004ABB] text-2xl font-semibold'>
                            Connect
                        </Text>
                    </View>
                    <Text className='text-[#6D6D6D] text-sm text-center py-3 px-4'>
                        Easily track your mechanic's route in real-time and stay
                        informed every step of the way. Help is on its way!
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

export default SliderTwo;
