import { useNavigation } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

type NavigationProps = {
    navigate: (route: 'SignUp') => void;
};

const SignInScreen = () => {
    const navigation = useNavigation<NavigationProps>();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text>Sign In Screen</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                style={{
                    paddingVertical: 16,
                    paddingHorizontal: 32,
                    backgroundColor: '#D93030',
                    borderRadius: 48,
                    marginBottom: 8
                }}
            >
                <Text style={{ color: 'white', textAlign: 'center' }}>
                    SignUp page
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignInScreen;
