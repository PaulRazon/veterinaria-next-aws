'use client'
import React from 'react'
import { AuthError, signIn, type SignInInput } from 'aws-amplify/auth';
import { signOut } from 'aws-amplify/auth';
import { useImmer } from 'use-immer'
import {Amplify} from 'aws-amplify';
import awsconfig from '../../aws-exports.js'; 
import { Button, TextField } from '@mui/material';
import Link from 'next/link.js';
import { useRouter } from 'next/navigation.js';
import { toast } from 'react-toastify';
Amplify.configure(awsconfig);

function Login() {
    const router = useRouter();
    const [login,setLogin]=useImmer({
        username:"",
        password:"",
        code:""
    })

    

    async function handleSignIn({ username, password }: SignInInput) {
      try {
        await signOut({ global: true });
        const user = await signIn({ username, password });

        router.push('/dashboard');
        console.log("User signed in:", user);
        
      } catch (error:any) {
        const authError = error as AuthError;
        if (authError.message.includes('password')) {
          toast.error('Contraseña o Usuario Incorrecto');
          console.log('Error signing in:', error);  
        }else{
          toast.error('Contraseña o Usuario Incorrecto');
          console.log('Error signing in:', error);  
        } 
      
        
      }
    }
    const handle =(e:any)=>{
      e.preventDefault();
      console.log({login})
      
      handleSignIn(login)
    }

    return (
    <div className='flex flex-col justify-center gap-5 items-center h-screen '>
    <form  onSubmit={handle} className='flex flex-col gap-3 justify-center items-center border shadow-md rounded-md p-9'>
        <h3 className='text-center font-bold text-2xl text-[#654190]'>Bienvenido <br /> Log-In</h3>
        <TextField
          required
          id="username"
          label="Username" 
          type="text" 
          value={login.username} 
            onChange={(e) => {
                setLogin((draft) => {
                  draft.username = e.target.value;
                });
              }}
        />
        <TextField
          id="password"
          label="Password"
          type="password" 
          value={login.password}
          onChange={(e) => {
                setLogin((draft) => {
                  draft.password = e.target.value;
                });
              }}
              />

        <Button variant='text' type='submit' className='p-3 bg-[#654190] hover:bg-[#41295e] uppercase text-white font-bold'>Enviar</Button>
        <Link href='/signup' className='text-[#654190] '>¿No tienes una cuenta?</Link>
    </form>
    {/* <button onClick={() => {handleSignOut();}} className='p-5 bg-amber-600 hover:bg-amber-700' type='submit'>Salir</button> */}
    </div>
  )
}

export default Login