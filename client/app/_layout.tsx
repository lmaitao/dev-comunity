import { Stack } from 'expo-router';
import "../global.css"
import 'react-native-reanimated';

export default function RootLayout() {

  return (
    <Stack
        initialRouteName="auth"
        screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="auth" />
      <Stack.Screen name="posts" />
    </Stack>
  );
}