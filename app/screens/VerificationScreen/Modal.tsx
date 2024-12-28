import React from 'react';
import { Modal as RNModal, View } from 'react-native';

type Props = {
    children: React.ReactNode;
    isVisible: boolean;
};

const Modal = (props: Props) => {
    return (
        <RNModal
            visible={props.isVisible}
            transparent
            animationType='fade'
            statusBarTranslucent
        >
            <View className='items-center  justify-center flex-1 p-3 bg-dark/5'>
                <View className='w-[85%] rounded-lg bg-[#fff] px-4 py-8'>
                    {props.children}
                </View>
            </View>
        </RNModal>
    );
};

export default Modal;
