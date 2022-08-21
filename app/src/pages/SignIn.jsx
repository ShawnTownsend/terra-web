import { useForm } from 'react-hook-form'
import Header2 from '../components/Header2'
import { Title } from '../components/Title'
import { Link } from 'react-router-dom'
import { Input } from '../components/input'
import { useMutation } from '@tanstack/react-query'

// const registerUser = async ( data) => {
//    await
// }

export function SignIn() {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm()

   const registerMutation = useMutation(
      data => {
         console.log(data)
         const body = {
            username: data.username,
            password: data.password,
         }
         return fetch('http://localhost:3002/auth/login', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
         })
      },
      {
         onSuccess: res => {
            console.log('success', res)
         },
      }
   )

   const onSubmit = data => {
      console.log('submitting', data)
      registerMutation.mutate(data)
   }

   return (
      <>
         <Header2 />
         <Link to="/">
            <p className="flex flex-row mt-6">
               <img
                  src="/images/icons/back-arrow.svg"
                  alt="Back"
                  className="mr-2"
               />
               Back
            </p>
         </Link>
         <div className="flex flex-col items-center mt-3">
            <img
               className="w-36"
               src="/images/illustrations/with-phone.svg"
               alt="Girl on phone"
            />
            <Title variant="h1" className="mt-2">
               Sign In
            </Title>
         </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Input
               type="email"
               id="username"
               label="Email"
               required={true}
               register={register}
            />
            <Input
               type="password"
               id="password"
               label="Password"
               required={true}
               register={register}
            />

            <button>Sign In</button>
         </form>
         <p>Forgot Password?</p>
         <p>or</p>
         <a href="http://localhost:3002/auth/google">
            <button>Continue with Google</button>
         </a>
         <a href="http://localhost:3002/auth/facebook">
            <button>Continue with Facebook</button>
         </a>
         <button>Join the Terrarians</button>
         <p>Don't have account?</p>
      </>
   )
}
