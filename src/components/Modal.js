import React, { useEffect } from "react";

const Modal = (props) => {
  const handleFalse = () => {
    props.setShow(false);
  };
  const run = () => {
    let but = document.getElementById("op1");
    if (props.show === true) {
      but.click();
    }
  };
  useEffect(() => {
    run();
  });
  let weather = props.weather;
  const modal =
    props.show === true ? (
      <div>
        <button
          type="button"
          id="op1"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          hidden
        >
          Launch static backdrop modal
        </button>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  More Info
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleFalse}
                ></button>
              </div>
              <div className="modal-body d-flex justify-content-start">
                <div className="w-100 justify-content-between">
                  <div className="sf">
                    <span>Description</span>
                    <span>{weather.weather[0].description}</span>
                  </div>
                  <hr />
                  <div className="sf">
                    <span>Feels Like</span>
                    <span>
                      {(weather.main.feels_like - 273.15).toFixed(1)}
                      <span>&#xb0;c</span>
                    </span>
                  </div>
                  <hr />
                  <div className="sf">
                    <span>Humidity</span>
                    <span>{weather.main.humidity + "%"}</span>
                  </div>
                  <hr />
                  <div className="sf">
                    <span>Pressure</span>
                    <span>{weather.main.pressure + " mBar"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  return modal;
};

export default Modal;
