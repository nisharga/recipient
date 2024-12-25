import { SafeAreaView } from 'react-native-safe-area-context';
import '../style/global.css';
import MainStack from './navigation';
import {
    useFonts,
    Outfit_100Thin,
    Outfit_200ExtraLight,
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_700Bold,
    Outfit_800ExtraBold,
    Outfit_900Black
} from '@expo-google-fonts/outfit';
import { Allan_400Regular, Allan_700Bold } from '@expo-google-fonts/allan';

export default function RootLayout() {
    let [fontsLoaded] = useFonts({
        Outfit_100Thin,
        Outfit_200ExtraLight,
        Outfit_300Light,
        Outfit_400Regular,
        Outfit_500Medium,
        Outfit_600SemiBold,
        Outfit_700Bold,
        Outfit_800ExtraBold,
        Outfit_900Black,
        Allan_400Regular,
        Allan_700Bold
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MainStack />
        </SafeAreaView>
    );
}
