import styled from 'styled-components';
import Header2 from '../components/Header2';
import '../components/ca.css'

function CreateAccount() {
    return(
        <>
        <body className='signUp'>
        <container className="container">
        <Header2/>
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
        <h5 id="pTag">Have an account?</h5><a href="/signin" id="aTag">Sign In</a>
        </container>
        </body>
        </>
    )
}

export default CreateAccount;


const AccountH1 = styled.h1 `
width: 326px;
height: 40px;
font-family: 'Epilogue';
font-style: normal;
font-weight: 600;
font-size: 28px;
margin-left: 70px;` 

const AccountH2 = styled.h2 `width: 326px;
height: 60px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
margin-left: 70px;`