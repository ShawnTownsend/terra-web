import { Route, Routes } from 'react-router-dom'
import FrontPage from './pages/FrontPage'
import CreateAccount from './pages/CreateAccount'
import SignIn from './pages/SignInPage'
import Donate from './pages/Donate'
import Main from './pages/Main'
import Home from './views/Home'
import PhotoStudio from './views/PhotoStudio'
import { Container } from './components/layout/Container'

document.title = 'Terra'

function App() {
   return (
      <Container>
         <Routes>
            <Route path="/signup" element={<CreateAccount />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<FrontPage />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="" element={<Main />}>
               <Route path="/main" element={<Home />} />
               <Route path="/photostudio" element={<PhotoStudio />} />
            </Route>
         </Routes>
      </Container>
   )
}

export default App
