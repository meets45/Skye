import { useState } from "react";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Modal from "./components/Modal";
import { Navbar } from "./components/Navbar";
import Weather from "./components/Weather";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [show, setShow] = useState(false);
  const [weather, setWeather] = useState(null);
  return (
    <>
      <Router>
        <Navbar />
        <Modal
          show={show}
          setShow={setShow}
          weather={weather}
          setWeather={setWeather}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Weather
                setShow={setShow}
                weather={weather}
                setWeather={setWeather}
              />
            }
          />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
