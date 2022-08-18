import Header2 from '../components/Header2'
import { Title } from '../components/Title'

export function SignUp() {
   return (
      <>
         <Header2 />
         <img
            src="/images/illustrations/with-phone.svg"
            alt="fruits"
            id="fruits"
            height="500px"
         />
         <Title variant="h1">Create Account</Title>
         <Title variant="h2">
            Join your fellow Terrarians - it takes less than a minute!
         </Title>
         <label htmlFor="email">Email</label>
         <input type="email" placeholder="Email" id="email" />
         <label htmlFor="" password>
            Password
         </label>
         <input type="password" placeholder="Password..." id="password" />
         <button>Create Account</button>
         <p>or</p>
         <button>Continue with Google</button>
         <button>Continue with Facebook</button>
         <h5>Have an account?</h5>
         <a href="/signin">Sign In</a>
      </>
   )
}
