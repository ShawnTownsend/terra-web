import { Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import MainView from "./pages/MainView";
import "./styles/global.scss";
import Home from "./views/Home";

document.title = "Terra";

function App() {
  return (
    <Routes>
      <Route path="/front" element={<FrontPage />} />
      <Route path="/" element={<MainView />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
