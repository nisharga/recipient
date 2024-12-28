import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useRef } from 'react';
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-input';
import { SmartPhone } from '@/static';
import Toast from 'react-native-toast-message';
import { useAppDispatch } from '@/app/redux/hooks';
import { addToCart } from '@/app/redux/cart/cartcartSlice';
import { useNavigation } from 'expo-router';

type NavigationProps = {
    navigate: (route: 'Verification') => void;
};

const NumberPicker = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<NavigationProps>();

    const [phoneCountryCode, setPhoneCountryCode] = useState<CountryCode>('FR');
    const [showPhoneCountryPicker, setShowPhoneCountryPicker] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const phoneInput = useRef<PhoneInput>(null);

    const handleCountrySelect = (country: any) => {
        setPhoneCountryCode(country.cca2);
        const newPhoneNumber = `+${country.callingCode[0]}`;
        setPhoneNumber(newPhoneNumber);
        if (phoneInput.current) {
            phoneInput.current.selectCountry(country.cca2.toLowerCase());
            phoneInput.current.setValue(newPhoneNumber);
            phoneInput.current.focus(); // Focus the input after selecting the country
        }
        setShowPhoneCountryPicker(false);
    };

    const handleClick = () => {
        if (phoneNumber.length > 9) {
            Toast.show({
                type: 'success',
                text1: 'New Verification Code Sent'
            });
            dispatch(addToCart({ phoneNumber: phoneNumber }));
            navigation.navigate('Verification'); // Use React Navigation
        } else {
            Toast.show({
                type: 'error',
                text1: 'Phone Number at least 9 characters'
            });
        }
    };
    return (
        <View className='container px-6'>
            <View className='flex flex-row items-center justify-start gap-4'>
                <SmartPhone />
                <View className='bg-[#6B6B6B] w-[1px] h-6'></View>
                <View className='flex flex-row gap-2'>
                    <PhoneInput
                        ref={phoneInput}
                        initialValue={phoneNumber}
                        initialCountry={phoneCountryCode.toLowerCase()}
                        onPressFlag={() => setShowPhoneCountryPicker(true)}
                        onChangePhoneNumber={(text) => {
                            setPhoneNumber(text);
                        }}
                        textProps={{
                            keyboardType: 'phone-pad'
                        }}
                    />
                    <CountryPicker
                        countryCode={phoneCountryCode}
                        visible={showPhoneCountryPicker}
                        onSelect={handleCountrySelect}
                        onClose={() => setShowPhoneCountryPicker(false)}
                        withFlagButton={false}
                        withFilter
                    />
                </View>
            </View>

            <View className='bg-[#6B6B6B] w-full h-[1px] my-4'></View>

            <TouchableOpacity
                onPress={handleClick}
                className='py-4 px-16 bg-[#D93030] rounded-[48px] mt-4'
            >
                <Text className='text-white text-center'>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NumberPicker;
