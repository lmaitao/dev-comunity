import {View } from "react-native";
import LoginForm from "@/modules/auth/components/login-form";

export default function LoginScreen() {
    return (
      <View className="flex-1 items-center justify-center bg-background p-4">
        <LoginForm />
      </View>
    );
}