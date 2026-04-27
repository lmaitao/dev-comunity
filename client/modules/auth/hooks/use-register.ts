import { useState } from "react";
import { registerUser } from "../actions/register-user";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
 
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: ""
  })

  const onChangeText = (key:string,text:string) => {
    setForm({
      ...form, [key]: text
    })
  }

  const {isPending,mutateAsync} = useMutation({
    mutationFn: registerUser,
    onSuccess: ({data,error}) => {
      if(error){
        alert("Error al registrar el usuario")
        return
      }
      alert("Usuario registrado correctamente")
    }
  })

  const onSubmit = async () => {
    await mutateAsync(form)
  }

   return {
     isPending,
     form,
     onChangeText,
     onSubmit,
   }
}