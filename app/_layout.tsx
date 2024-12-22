import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../style/global.css";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-red-500">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar />
    </SafeAreaView>
  );
}
