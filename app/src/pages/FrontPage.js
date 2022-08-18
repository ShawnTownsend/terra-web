import '../components/fp.css'
import Header2 from '../components/Header2'
// import { Link } from "react-router-dom"

function FrontPage() {
   return (
      <>
         <body className="front">
            <container className="container">
               <Header2 />
               <h1 className="firstH1" id="firstQ">
                  Replenish the earth, one grocery trip at a time.
               </h1>

               <h2 id="secondQ">
                  From farm to table, we want all produce to be loved and used.
               </h2>
               <img
                  src="https://i.imgur.com/d2AchLm.png"
                  alt="Man on the phone"
                  className="firstImage"
               />
               <h2 id="thirdQ">Capture your peculiar produce.</h2>
               <h2 id="fourthQ">Buy your peculiar produce and get rewarded.</h2>
               <img
                  src="https://i.imgur.com/pt89UKR.png"
                  alt="Coin in hand"
                  id="secondImage"
               />
               <img
                  src="https://i.imgur.com/eYZ2JPj.png"
                  alt="Girl pointing"
                  id="thirdImage"
               />
               <h2 id="fifthQ">
                  Compete with other Terrarians and be featured.
               </h2>
               <button>Join Now</button>
               <p>Have an account?</p>
               <a href="/signin">Sign In</a>
            </container>
         </body>
      </>
   )
}

export default FrontPage
