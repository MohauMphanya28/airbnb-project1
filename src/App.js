import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Inspiration from "./components/Inspiration";
import Experiences from "./components/Experiences";
import GiftCards from "./components/GiftCards";
import Questions from "./components/Questions";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";

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
        <Footer />
      </main>
    </>
  );
}

export default App;
