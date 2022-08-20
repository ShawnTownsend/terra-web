import { useNavigate } from 'react-router-dom'
import Header2 from '../components/Header2'
import { Title } from '../components/Title'
import { Link } from 'react-router-dom'
import { Input } from '../components/input'

export function SignIn() {
   const handleSubmit = e => {
      e.preventDefault()
      console.log('form submitted')
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
         <form onSubmit={e => handleSubmit(e)}>
            <Input type="email" id="email" label="Email" required={true} />
            <Input
               type="password"
               id="password"
               label="Password"
               required={true}
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
