'use client'
import React from 'react'
import { useImmer } from 'use-immer'
import { signUp } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import {Amplify} from 'aws-amplify';
import awsconfig from '../../aws-exports.js'; // Path to your aws-exports.js or aws-exports.ts file
import { useTienda } from '../hooks/useTienda';
import Modal from '../components/modal';
import { Button, TextField } from '@mui/material';


Amplify.configure(awsconfig);

type SignUpParameters = {
  username: string;
  password: string;
  email:string;
};


function SignUp() {
    const router = useRouter();
    const {modal,setModal} = useTienda();
    const [login,setLogin]=useImmer({
        username:"",
        password:"",
        email:""
    })


    
    async function handleSignUp({
        username,
        password,
        email,
      }: SignUpParameters) {
        try {
          const { userId } = await signUp({
            username,
            password,
            options: {
              userAttributes: {
                email,
              //   phone_number // E.164 number convention
              },
              // optional
              autoSignIn: false // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
            }
          });
      
          console.log(userId);
        } catch (error) {
          console.log('error signing up:', error);
        }
      }
     
      const handleSubmit=(e:any)=>{
        e.preventDefault();
        console.log({login})
        setModal(true)
        handleSignUp(login)
      }
    return (
      <>
        <form onSubmit={handleSubmit} className={`${modal?'hidden':'flex flex-col'} gap-5 border shadow-md rounded-md p-9`}>
        <h3 className='text-center font-bold text-2xl text-[#654190]'>Registrate</h3>
          <TextField  
          required
          id="username"
          label="Username"
          type="text" value={login.email} 
              onChange={(e) => {
                  setLogin((draft) => {
                    draft.email = e.target.value;
                    draft.username = e.target.value;
                  });
                }}
          />
          <TextField
          id="password"
          label="Password"
          type="password" 
          required
          value={login.password}
              onChange={(e) => {
                  setLogin((draft) => {
                    draft.password = e.target.value;
                  });
                }}
                />

        
          
          <Button className='p-3 bg-[#654190] hover:bg-[#654190] uppercase text-white font-bold' type='submit'>Enviar</Button>
          
        </form>
      {modal&&<Modal/>}
      </>
    
  )
}

export default SignUp