import { View , ActivityIndicator } from 'react-native'
import { Text } from "@/modules/core/components/text";
import { Card, CardContent } from "@/modules/core/components/card";
import { Input } from "@/modules/core/components/input";
import { Button } from "@/modules/core/components/button";
import { Label } from "@/modules/core/components/label";
import { router, useRouter } from "expo-router";
import { useState } from "react"


export const RegisterForm = () => {

  const router = useRouter();

  const [isPending, setIsPending] = useState(false);

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: ""
  })

  const handleSubmit = async () => {
    setIsPending(true)

      const response = await fetch("http://192.168.1.31:54321/rest/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
             name: form.name,
             lastName: form.lastName,
             email: form.email,
             password: form.password,
          })
      })

      if (response.ok) {
        alert("Usuario registrado correctamente")
        setIsPending(false)
        return;
      }
        alert("Error al registrar el usuario")
        setIsPending(false)
  }

  const onPress  = () => {
    router.push('/auth/login')}

  return (
        <View className= "px-8 "  >
            <Text variant="h1" className='mb-8 text-center mt-10'>Registrate Para Iniciar Seccion </Text>
            <Card className='pt-6 pb-8'>
              <CardContent className="gap-2">
                  <View className='form-group'>
                    <Label>Ingresa Tus Nombres</Label>
                    <Input
                      placeholder="Nombres"
                      keyboardType="default"
                      autoCapitalize='none'
                      value={form.name}
                      onChangeText={(text) => setForm({ ...form, name: text })}
                    />
                  </View>
                  <View className='form-group'>
                    <Label>Ingresa Tus Apellidos</Label>
                    <Input
                      placeholder="Apellidos"
                      keyboardType="default"
                      autoCapitalize='none'
                      value={form.lastName}
                      onChangeText={(text) => setForm({ ...form, lastName: text })}
                    />
                  </View>
                  <View className='form-group'>
                    <Label>Ingresa Tu Correo Electronico</Label>
                    <Input
                      placeholder="Email"
                      keyboardType="email-address"
                      autoCapitalize='none'
                      value={form.email}
                      onChangeText={(text) => setForm({ ...form, email: text })}
                    />
                  </View>
                  <View className='form-group'>
                    <Label>Ingresa Tu Contraseña</Label>
                    <Input
                      placeholder="Password"
                      secureTextEntry
                      autoCapitalize='none'
                      value={form.password}
                      onChangeText={(text) => setForm({ ...form, password: text })}
                      />
                  </View>
                    <Button disabled={isPending} onPress={handleSubmit}>
                      {
                        isPending
                        ? (
                          <>
                          <ActivityIndicator size="small" color="#fff" className="mr-2" />
                          <Text>Registrarse</Text>
                          </>
                        )
                        :<Text>Registrarse</Text>
                      }
                    </Button>
                    <Text className='mt-2 text-center'>¿Ya tienes una cuenta?</Text>
                    <Button variant='link' onPress={onPress} >
                      <Text>Iniciar Seccion</Text>
                    </Button>
              </CardContent>
            </Card>
        </View>
    )
}

export default RegisterForm;