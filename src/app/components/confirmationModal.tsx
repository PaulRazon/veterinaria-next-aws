import React from 'react'
import { confirmSignUp,ConfirmSignUpInput } from 'aws-amplify/auth';
import {Amplify} from 'aws-amplify';
import awsconfig from '../../aws-exports.js'; // Path to your aws-exports.js or aws-exports.ts file
import { useImmer } from 'use-immer';
import { useTienda } from '../hooks/useTienda';
import { useRouter } from 'next/navigation.js';
import { Button, TextField } from '@mui/material';

export type confirmSignUp = {
  username: string;
  confirmationCode: string;
};
Amplify.configure(awsconfig);
function ConformationModal() {
  const router = useRouter();
  const {setModal} = useTienda();
  const [code,setCode] = useImmer({
    username:"",
    confirmationCode:""
  })

  async function handleSignUpConfirmation({
    username,
    confirmationCode
  }: ConfirmSignUpInput) {
    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username,
        confirmationCode
      });
      console.log(isSignUpComplete)
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }
  
  const handleSubmit = (e:any)=>{
    e.preventDefault()
    setModal(false)
    handleSignUpConfirmation(code)
    router.push('/')
    
  }
  return (
    <form className='flex flex-col gap-5 border shadow-md rounded-md p-9 ' onSubmit={handleSubmit}>
      <h1 className='text-[#654190] font-bold text-center'>Confirmar Cuenta</h1>
        <TextField  
          required
          id="username"
          label="Username"
          type="text" value={code.username}
             onChange={(e) => {
              setCode((draft) => {
                draft.username = e.target.value;
              });
            }}
            />

      
        <TextField  
          required
          id="code"
          label="Code"
          className='text-black' type="text" value={code.confirmationCode}
             onChange={(e) => {
              setCode((draft) => {
                draft.confirmationCode = e.target.value;
              });
            }}
            />
      <Button className='p-3 bg-[#1c1a1d] hover:bg-[#4a3069] uppercase text-white font-bold' type='submit'>Confirm</Button>
    </form>
  )
}

export default ConformationModal