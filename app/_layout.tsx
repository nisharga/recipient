import { SafeAreaView } from 'react-native-safe-area-context';
import '../style/global.css';
import MainStack from './navigation';

export default function RootLayout() {
    return (
        <SafeAreaView className='flex-1 items-center justify-center'>
            <MainStack />
        </SafeAreaView>
    );
}
