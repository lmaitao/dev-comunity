import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function RegisterScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-background p-4">
            <Text className="text-2xl font-bold text-blue-500">Register</Text>
            <Link href="/auth/login" className="text-blue-500">Login</Link>
            <Link href="/posts" className="text-blue-500">Posts</Link>
        </View>
    );
}