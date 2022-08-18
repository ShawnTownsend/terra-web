import Header2 from '../components/Header2'
import { Title } from '../components/Title'
// import { Link } from "react-router-dom"

function FrontPage() {
   return (
      <>
         <Header2 />
         <Title variant="h1" className="text-primary">
            Replenish the earth, one grocery trip at a time.
         </Title>

         <Title variant="h2">
            From farm to table, we want all produce to be loved and used.
         </Title>

         <div className="flex flex-row">
            <img
               src="https://i.imgur.com/d2AchLm.png"
               alt="Man on the phone"
               className="w-16"
            />

            <p>Capture your peculiar produce.</p>
         </div>
         <div className="flex flex-row-reverse">
            <img
               src="https://i.imgur.com/pt89UKR.png"
               alt="Coin in hand"
               className="w-16"
            />
            <p>Buy your peculiar produce and get rewarded.</p>
         </div>
         <div className="flex flex-row">
            <img
               src="https://i.imgur.com/eYZ2JPj.png"
               alt="Girl pointing"
               className="w-16"
            />
            <p>Compete with other Terrarians and be featured.</p>
         </div>
         <button>Join Now</button>
         <p>Have an account?</p>
         <a href="/signin">Sign In</a>
      </>
   )
}

export default FrontPage
