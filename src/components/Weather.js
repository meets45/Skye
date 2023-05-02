import React, { useState } from "react";
import imgs from "../moon.png";
import imgv from "../sun.png";

const Weather = (props) => {
  const [city, setCity] = useState("");
  const handleClick = () => {
    props.setShow(true);
  };
  const handleFormSubmit = async () => {
    if (city === "") return;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a726469bd03c85e79d3f5b012cf76b46`
    );
    const data = await response.json();
    props.setShow(false);
    props.setWeather(data);
  };
  function convertSecondstoTime(given_seconds, wo) {
    if (wo === "n") given_seconds *= 1000;
    let dateObj = new Date(given_seconds);
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    let append = " AM";
    if (hours > 12) {
      hours -= 12;
      append = " PM";
    }
    if (hours === 0) hours = 12;
    let timeString =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      append;
    return timeString;
  }
  const findKey = (event) => {
    if (event.keyCode === 13) {
      handleFormSubmit();
      event.target.blur();
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <div className="d-flex width50">
          <input
            className="form-control mb-3 ht5"
            type="search"
            placeholder="Enter a city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            onKeyDown={(event) => findKey(event)}
          />
          <button
            className="btn btn-success me-2 op"
            onClick={handleFormSubmit}
            type="button"
            id="btnSearch"
          >
            Search
          </button>
        </div>
      </div>
      {props.weather && props.weather.message !== "city not found" ? (
        <div className="main">
          <div className="weather mt-4">
            <div className="leftw">
              <div>
                <span>Current Weather</span>
                <br />
                <span style={{ color: "grey", fontSize: "13px" }}>
                  {convertSecondstoTime(new Date(), "y")}
                </span>
              </div>
              <div className="fm">
                <img
                  src={
                    new Date().getHours() >= 5 && new Date().getHours() <= 18
                      ? imgv
                      : imgs
                  }
                  alt="imgs"
                  style={{
                    marginRight: "15px",
                    width: "100px",
                    height: "100px",
                  }}
                />
                <span style={{ fontSize: "64px" }}>
                  {/* {weather.name} <br /> */}
                  {(props.weather.main.temp - 273.15).toFixed(1)}
                  <span style={{ fontSize: "32px" }}>&#xb0;c</span>
                </span>
              </div>
              <div className="fend">
                <span>{props.weather.weather[0].main}</span>
              </div>
            </div>
            <div className="rightw">
              <div className="sf">
                <span>Wind Gusts</span>
                <span>
                  {((props.weather.wind.speed * 3600) / 1000).toFixed(1) +
                    " KM"}
                </span>
              </div>
              <hr />
              <div className="sf">
                <span>Sunrise</span>
                <span>
                  {convertSecondstoTime(props.weather.sys.sunrise, "n")}
                </span>
              </div>
              <hr />
              <div className="sf">
                <span>Sunset</span>
                <span>
                  {convertSecondstoTime(props.weather.sys.sunset, "n")}
                </span>
              </div>
              <hr />
              <div className="se mt-2" onClick={handleClick}>
                More Details &nbsp;
                <i class="fa-sharp fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="mt-3">
            Get weather about any city.
            <br /> Crafted with ❤️ by meets45
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
