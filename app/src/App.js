// import packages
import { Route, Routes } from 'react-router-dom'

// import routes
import { FrontPage } from './pages/FrontPage'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { Donate } from './pages/Donate'
import Main from './pages/Main'
import { Dashboard } from './views/Dashboard'
import PhotoStudio from './views/PhotoStudio'
import { Container } from './components/layout/Container'

document.title = 'Terra'

function App() {
   return (
      <Container>
         <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<FrontPage />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="" element={<Main />}>
               <Route path="/dashboard" element={<Dashboard />} />
               <Route path="/photostudio" element={<PhotoStudio />} />
            </Route>
         </Routes>
      </Container>
   )
}

export default App
