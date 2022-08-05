import { Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignInPage";
import MainView from "./pages/MainView";
import "./styles/global.scss";
import Home from "./views/Home";

document.title = "Terra";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<CreateAccount />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/front" element={<FrontPage />} />
      <Route path="/" element={<MainView />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
