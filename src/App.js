import { Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import HomeView from "./pages/HomeView";
import TestPage from "./pages/TestPage";

document.title = "Terra";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/homepage" element={<HomeView />} />
      <Route path="/testpage" element={<TestPage />} />
    </Routes>
  );
}

export default App;
