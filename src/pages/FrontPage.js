import SVGComponent from "../components/SVG"
import '../components/fp.css'
// import { Link } from "react-router-dom"

function FrontPage() {
        return(
          <>
      <SVGComponent className="logo"/>
  <br></br>
          <h1 className="firstH1" id="firstQ">
          Replenish the earth, one grocery trip at a time.
          </h1>
          <h3 className="firstH1" id="secondQ">
          From farm to table, we want all produce to be loved and used.
          </h3>
          <img src='https://i.imgur.com/d2AchLm.png' alt='Man on the phone' className="firstImage"/>
          <h2 id="thirdQ">
          Capture your peculiar produce.
          </h2>
          <h2 id="fourthQ">
          Buy your peculiar produce and get rewarded.
          </h2>
          <img src='https://i.imgur.com/BLZI9MC.png' alt='Coin in hand' id="secondImage" height="450px"/> 
          <img src="https://i.imgur.com/eYZ2JPj.png" alt='Girl pointing' id="thirdImage" width="400px"/>
          <h2 id="fifthQ">Compete with other Terrarians and be featured.</h2>
          <button className="button">
            Join Now
          </button>
          <p id="pTag">Have an account?</p><a href="/signin" id="aTag">Sign In</a>
</>
        )
}

export default FrontPage