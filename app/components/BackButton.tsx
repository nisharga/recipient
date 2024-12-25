import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ArrowIconBack } from '@/static';
import { useNavigation } from '@react-navigation/native';

const BackButton = ({ routePath }: any) => {
    type NavigationProps = {
        navigate: (route: any) => void;
    };
    const navigation = useNavigation<NavigationProps>();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(routePath)}>
            <View className='border rounded-full border-[#E7E7E7]  w-10 h-10 flex items-center justify-center'>
                <ArrowIconBack className='fill-[#353535] p-2.5 !w-12 !h-12' />
            </View>
        </TouchableOpacity>
    );
};

export default BackButton;
