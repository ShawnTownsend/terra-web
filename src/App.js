import { Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import HomeView from "./pages/HomeView";
import "./styles/global.scss";

document.title = "Terra";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/homepage" element={<HomeView />} />
    </Routes>
  );
}

export default App;
