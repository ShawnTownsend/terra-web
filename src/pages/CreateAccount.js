import styled from 'styled-components';
import '../components/ca.css'

function CreateAccount() {
    return(
        <>
        <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
        </div>
        <img src="https://i.imgur.com/Gc8FnHC.png" alt="fruits" id="fruits" height="500px"/>
        <AccountH1>Create Account</AccountH1>
        <AccountH2>Join your fellow Terrarians - it takes less than a minute!</AccountH2>
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


const AccountH1 = styled.h1 `font-family: 'Epilogue';
font-size: 100px;
margin-left: 250px;` 

const AccountH2 = styled.h2 `font-family: 'Montserrat';
font-size: 50px;
margin-left: 250px;`