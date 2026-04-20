import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function LoginScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-background p-4">
            <Text className="text-2xl font-bold text-blue-500">Login</Text>
            <Link href="/auth/register" className="text-blue-500">Register</Link>
            <Link href="/posts" className="text-blue-500">Posts</Link>
        </View>
    );
}