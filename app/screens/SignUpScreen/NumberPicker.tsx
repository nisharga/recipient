import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useRef } from 'react';
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-input';

const NumberPicker = () => {
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
        }
        setShowPhoneCountryPicker(false);
    };

    const handleClick = () => {
        console.log(phoneNumber);
    };
    return (
        <View className='container px-6'>
            <PhoneInput
                ref={phoneInput}
                initialValue={phoneNumber}
                initialCountry={phoneCountryCode.toLowerCase()}
                onPressFlag={() => setShowPhoneCountryPicker(true)}
                onChangePhoneNumber={(text) => {
                    setPhoneNumber(text);
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

            <TouchableOpacity
                onPress={handleClick}
                className='py-4 px-16 bg-[#D93030] rounded-[48px]'
            >
                <Text className='text-white text-center'>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NumberPicker;
