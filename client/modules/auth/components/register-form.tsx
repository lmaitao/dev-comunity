import { View , ActivityIndicator } from 'react-native'
import { Text } from "@/modules/core/components/text";
import { Card, CardContent } from "@/modules/core/components/card";
import { Input } from "@/modules/core/components/input";
import { Button } from "@/modules/core/components/button";
import { Label } from "@/modules/core/components/label";
import { router } from "expo-router";
import { useRegister } from '../hooks/use-register';



export const RegisterForm = () => {

  const {form, onSubmit, isPending, onChangeText} = useRegister();

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
                      value={form.name}
                      onChangeText={(text) => onChangeText("name", text)}
                    />
                  </View>
                  <View className='form-group'>
                    <Label>Ingresa Tus Apellidos</Label>
                    <Input
                      placeholder="Apellidos"
                      value={form.lastname}
                      onChangeText={(text) => onChangeText("lastname", text)}
                    />
                  </View>
                  <View className='form-group'>
                    <Label>Ingresa Tu Correo Electronico</Label>
                    <Input
                      placeholder="Email"
                      value={form.email}
                      onChangeText={(text) => onChangeText("email", text)}
                    />
                  </View>
                  <View className='form-group'>
                    <Label>Ingresa Tu Contraseña</Label>
                    <Input
                      placeholder="Password"
                      secureTextEntry
                      value={form.password}
                      onChangeText={(text) => onChangeText("password", text)}
                      />
                  </View>
                    <Button disabled={isPending} onPress={onSubmit}>
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