import '../components/donate.css'
import Header from "../components/Header";

function Donate() {
    return(
        <>
        <body className="donatePage">
        <container className="container">
        <Header/>
        <img src="https://i.imgur.com/VJNHQGm.png" alt="Mr. Terra" className="MrTerra"/>
        <h1 className="donate">Donate</h1>
        <p id="words">Explore some food rescue organizations below and consider making a small donation. It saves Mister Terra from food waste! </p>
        <p className="p2">Get your first Explore Orgs Badge by checking out their websites.</p>
        <img src="https://i.imgur.com/C7eOXat.png" className="donation" alt="Donation info"/>
        <img src="https://i.imgur.com/Ei7fM2i.png" className="donation" alt="Donation info"/>
        <img src="https://i.imgur.com/E9WhaGV.png" className="donation" alt="Donation info"/>
        </container>
        </body>
        </>
    )
}

export default Donate;