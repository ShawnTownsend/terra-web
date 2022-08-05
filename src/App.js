import { Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignInPage";
import Main from "./pages/Main";
import "./styles/global.scss";
import Home from "./views/Home";
import PhotoStudio from "./views/PhotoStudio";

document.title = "Terra";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<CreateAccount />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/front" element={<FrontPage />} />
      <Route path="/" element={<Main />}>
        <Route path="" element={<Home />} />
        <Route path="photostudio" element={<PhotoStudio />} />
      </Route>
    </Routes>
  );
}

export default App;
