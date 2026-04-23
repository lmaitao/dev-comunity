import RegisterForm from "@/modules/auth/components/register-form";
import { View } from "react-native";

export default function RegisterScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-background p-4">
            <RegisterForm />
        </View>
    );
}