import '../components/si.css'
import SVGComponent from '../components/SVG';


function SignIn() {
    return(
        <>
        <SVGComponent className="logo"/>
        <br></br>
        <img src="https://i.imgur.com/1T7Aumy.png" alt="Girl on phone" className='GirlOnPhone' />
        <h1 className='SIH1'>Sign In</h1>
        <p className="inputLabelName">Email</p>
        <input type="email" placeholder="Email..." id="email" />
        <p className="inputLabelName">Password</p>
        <input type="password" placeholder="Password..." id="password" />
        <button className="button">
            Sign In
        </button>
        <a id="passwordTag" href="/">Forgot Password?</a>
        <div className="separator">
        <div className="line" />
        <h2>or</h2>
        <div className="line" />
        </div>
        <button className="GF">
            Continue with Google
        </button>
        <button className="GF" id="GFF">
            Continue with Facebook
        </button>
        <p id="paraTag">Don't have account?</p>
        <button className="button2">
            Join the Terrarians
        </button>
        </>
    )
}

export default SignIn;