import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Inspiration from "./components/Inspiration";
import Experiences from "./components/Experiences";
import GiftCards from "./components/GiftCards";
import Questions from "./components/Questions";
import Destinations from "./components/Destinations";

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
        <GiftCards />
        <Questions />
        <Destinations />
      </main>
    </>
  );
}

export default App;
