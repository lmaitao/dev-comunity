import { View } from 'react-native'
import { Text } from "../core/components/text";
import { Card, CardContent } from "../core/components/card";
import { Input } from "../core/components/input";
import { Button } from "../core/components/button";
import { Label } from "../core/components/label";
import { router } from "expo-router";
import React from "react";


export const LoginForm = () => {

  const onPress  = () => {
    router.push('/auth/register')
    }

  return (
        <View className= "px-8 "  >
            <Text variant="h1" className='mb-8 text-center mt-10'>Iniciar Seccion </Text>
            <Card className='pt-6 pb-8'>
              <CardContent className="gap-2">
                  <View className='form-group'>
                    <Label>Correo Electronico</Label>
                    <Input
                      placeholder="Email"
                      keyboardType="email-address"
                      autoCapitalize='none'
                    />
                  </View>
                  <View className='form-group'>
                    <Label>Contraseña</Label>
                    <Input
                      placeholder="Password"
                      secureTextEntry
                      autoCapitalize='none'/>
                  </View>
                   <View className='gap-4'>
                    <Button className='mt-6'>
                      <Text variant='large'>Inicar Seccion</Text>
                    </Button>
                    <Text className='mt-2 text-center'>¿No tienes una cuenta?</Text>
                     <Button variant='link' onPress={onPress} >
                      <Text>Registrate</Text>
                    </Button>
                   </View>
              </CardContent>
            </Card>
        </View>
    )
}

export default LoginForm;