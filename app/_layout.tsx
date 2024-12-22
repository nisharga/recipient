import { SafeAreaView } from 'react-native-safe-area-context';
import '../style/global.css';
import MainStack from './navigation';

export default function RootLayout() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MainStack />
        </SafeAreaView>
    );
}
