import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Inspiration from "./components/Inspiration";
import Experiences from "./components/Experiences";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Inspiration />
        <Experiences />
      </main>
    </>
  );
}

export default App;
