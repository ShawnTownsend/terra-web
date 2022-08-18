import Header2 from '../components/Header2'
import { Title } from '../components/Title'

export function SignIn() {
   return (
      <>
         <Header2 />
         <img src="/images/illustrations/with-phone.svg" alt="Girl on phone" />
         <Title variant="h1">Sign In</Title>
         <label htmlFor="email">Email</label>
         <input type="email" placeholder="Email" id="email" />
         <label htmlFor="password">Password</label>
         <input type="password" placeholder="Password" id="password" />
         <button>Sign In</button>
         <p>Forgot Password?</p>
         <p>or</p>
         <button>Continue with Google</button>
         <button>Continue with Facebook</button>
         <button>Join the Terrarians</button>
         <p>Don't have account?</p>
      </>
   )
}
