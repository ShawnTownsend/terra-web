import '../components/si.css'
import Header2 from '../components/Header2';


function SignIn() {
    return(
        <>
        <body className='signIn'>
        <container className="container">
        <Header2/>
        <img src="https://i.imgur.com/1T7Aumy.png" alt="Girl on phone" className='GirlOnPhone' />
        <h1 className='SIH1'>Sign In</h1>
        <h3 className="inputLabelName">Email</h3>
        <input type="email" placeholder="Email..." id="email" />
        <h3 className="inputLabelName">Password</h3>
        <input type="password" placeholder="Password..." id="password" />
        <button>
            Sign In
        </button>
        <h4 href="/">Forgot Password?</h4>
        <div className="separator">
        <div className="line" />
        <h2>or</h2>
        <div className="line" />
        </div>
        <button className="GF">
            Continue with Google
        </button>
        <button className="GF">
            Continue with Facebook
        </button>
        <button className="button2">
            Join the Terrarians
        </button>
        <h5>Don't have account?</h5>
        </container>
        </body>
        </>
    )
}

export default SignIn;