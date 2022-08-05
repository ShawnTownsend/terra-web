import { Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignInPage";
import TestPage from "./pages/TestPage";

document.title = "Terra";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/signup" element={<CreateAccount />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/testpage" element={<TestPage />} />
    </Routes>
  );
}

export default App;
