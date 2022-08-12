import SVGComponent from "../components/SVG";
import '../components/donate.css'


function Donate3() {
    return(
        <>
        <SVGComponent className="logo"/>
        <img src="https://i.imgur.com/VJNHQGm.png" alt="Mr. Terra" className="MrTerra"/>
        <h1 className="donate">Donate</h1>
        <p className="para">Explore some food rescue organizations below and consider making a small donation. It saves Mister Terra from food waste!</p>
        <p className="para2">Get a point by checking out their websites.</p>
        <img src="https://i.imgur.com/E9WhaGV.png" alt="Donation info" className="donation"/>
        <button className="leftArrow">←</button><button className="rightArrow">→</button>
        </>
    )
}

export default Donate3;