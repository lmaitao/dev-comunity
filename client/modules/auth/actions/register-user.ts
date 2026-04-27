import axios from "axios";


interface RegisterUserData {
    name: string;
    lastname: string;
    email: string;
    password: string;
}

export const registerUser = async (user: RegisterUserData) => {
  try{
      const response = await axios.post('http://192.168.1.32:54321/rest/v1/users', user, {
        headers: {
          "apikey": "sb_publishable_ACJWlzQHlZjBrEguHvfOxg_3BJgxAaH",
          "Authorization": "Bearer sb_publishable_ACJWlzQHlZjBrEguHvfOxg_3BJgxAaH",
          "Prefer": "return=minimal"
        }
      })
      return {
        error: null,
        data: response.data
      }
  }
  catch(error){
    console.log(error);
    return {
      error:"Error al registrar el usuario",
      data: null
    }
  }
}