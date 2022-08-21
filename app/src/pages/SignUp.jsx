import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Header2 from '../components/Header2'
import { Input } from '../components/input'
import { Title } from '../components/Title'

export function SignUp() {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm()

   const signinMutation = useMutation(
      data => {
         console.log(data)
         const body = {
            username: data.username,
            password: data.password,
         }
         return fetch('http://localhost:3002/auth/register', {
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
      signinMutation.mutate(data)
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
               Create Account
            </Title>
         </div>
         <Title variant="h2">
            Join your fellow Terrarians - it takes less than a minute!
         </Title>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Input
               type="email"
               id="email"
               label="Email"
               required={true}
               register={register}
               defaultValue="royanger@gmail.com"
            />
            <Input
               type="text"
               id="name"
               label="Name"
               required={true}
               register={register}
               defaultValue="Roy A."
            />
            <Input
               type="password"
               id="password"
               label="Password"
               required={true}
               register={register}
            />

            <button>Create Account</button>
         </form>
         <p>or</p>
         <button>Continue with Google</button>
         <button>Continue with Facebook</button>
         <h5>Have an account?</h5>
         <a href="/signin">Sign In</a>
      </>
   )
}
