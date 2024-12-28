import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BackButton } from '@/app/components';
import { useAppSelector } from '@/app/redux/hooks';
import { OtpInput } from 'react-native-otp-entry';
import SetupPersonalInfo from './SetupPersonalInfo';

const VerificationScreen = () => {
    const { phoneNumber } = useAppSelector((state) => state.cart);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [verificationCode, setVerificationCode] = useState('');

    // timer show
    const [timeRemaining, setTimeRemaining] = useState(30); // Start with 30 seconds
    // const [isTimeUp, setIsTimeUp] = useState(false);

    useEffect(() => {
        if (timeRemaining > 0) {
            const timer = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [timeRemaining]);
    // timer show

    const [isModalShow, setIsModalShow] = useState(false);

    const handleSubmit = () => {
        setIsModalShow(true);
    };

    return (
        <View className='py-6'>
            <View className='px-8 relative mb-10'>
                <Text className='title mb-3 text-center'>Verification</Text>
                <Text className='content text-center mb-8'>
                    Code has been send to {phoneNumber}
                </Text>
                <View className='absolute left-4 top-0'>
                    <BackButton routePath='SignUp' />
                </View>
            </View>

            {/* otp input code */}
            <View className='flex-row gap-5 mb-8'>
                <OtpInput
                    numberOfDigits={4}
                    onTextChange={(text) => setVerificationCode(text)}
                    theme={{
                        pinCodeContainerStyle: {
                            paddingHorizontal: 30,
                            width: 'auto',
                            alignItems: 'center',
                            outlineColor: '#004ABB',
                            borderWidth: 2
                        },
                        containerStyle: {
                            gap: 15,
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center'
                        },
                        pinCodeTextStyle: {
                            color: '#004ABB'
                        },
                        focusedPinCodeContainerStyle: {
                            borderColor: '#004ABB'
                        }
                    }}
                />
            </View>
            {/* otp input code */}

            <View className='gap-3'>
                <Text className='text-primary text-xl font-semibold text-center'>
                    Resend in {`0:${timeRemaining.toString().padStart(2, '0')}`}
                </Text>
                <Text className='text-[#FF8510] text-xl font-semibold text-center'>
                    Didn't receive code?
                </Text>
                <Text className='text-xl font-semibold text-center text-secondary'>
                    Resend Code
                </Text>
            </View>

            <View className='px-6'>
                <TouchableOpacity
                    onPress={() => handleSubmit()}
                    className='py-4 px-16 bg-[#D93030] rounded-[48px] mt-4'
                >
                    <Text className='text-white text-center'>Submit</Text>
                </TouchableOpacity>
            </View>

            <SetupPersonalInfo
                isModalShow={isModalShow}
                setIsModalShow={setIsModalShow}
            />
        </View>
    );
};

export default VerificationScreen;
