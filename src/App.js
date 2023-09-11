import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CardsDetails from "./components/CardsDetails";
import Card from "./components/Card";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/card/:id" element={<CardsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
