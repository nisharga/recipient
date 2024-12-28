import { Text, TouchableOpacity, View } from 'react-native';
import { Congratulations } from '@/static';

import Modal from './Modal';
import { useNavigation } from 'expo-router';

type NavigationProps = {
    navigate: (route: 'SignIn') => void;
};

const SetupPersonalInfo = ({ isModalShow, setIsModalShow }: any) => {
    const navigation = useNavigation<NavigationProps>();
    return (
        <View className='justify-between flex-1 items-center content-center'>
            <Modal isVisible={isModalShow}>
                <View className='gap-5 align-middle items-center justify-center'>
                    <Congratulations />
                    <Text className='text-center text-3xl font-bold text-primary'>
                        Congratulations
                    </Text>
                    <Text className='text-center text-xl'>
                        Your account is ready to use
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            setIsModalShow(false);
                            navigation.navigate('SignIn'); // Use React Navigation
                        }}
                        className='py-4 px-16 bg-[#D93030] rounded-[48px] mt-4'
                    >
                        <Text className='text-white text-center'>Submit</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

export default SetupPersonalInfo;
