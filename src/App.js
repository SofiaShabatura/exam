import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Generator from "./components/Generator/Generator";
import ColorPage from './components/ColorPage/ColorPage';




function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<SignUp />} />
      <Route path="/color-generator" element={<Generator />} />
      <Route path="/color/:hex" element={<ColorPage />} />
    </Routes>
  );
}

export default App;



