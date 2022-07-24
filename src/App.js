import { Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import TestPage from "./pages/TestPage";

document.title = "Terra";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/testpage" element={<TestPage />} />
    </Routes>
  );
}

export default App;
