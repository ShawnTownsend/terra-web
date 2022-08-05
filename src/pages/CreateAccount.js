import '../components/ca.css'


function CreateAccount() {
    return(
        <>
        <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
        </div>
        <img src="https://i.imgur.com/VPoE98s.png" alt="Phone in hand" id="phoneHand" height="500px"/>
        <h1 className="accountH1">Create Account</h1>
        <h2 className="accountH2">Join your fellow Terrarians - it takes less than a minute!</h2>
        <p className="inputLabelName">Email</p>
        <input type="email" placeholder="Email..." id="email" />
        <p className="inputLabelName">Password</p>
        <input type="password" placeholder="Password..." id="password" />
        <button className="button">
            Create Account
        </button>
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
        <p id="pTag">Have an account?</p><a href="/signin" id="aTag">Sign In</a>
        </>
    )
}

export default CreateAccount;