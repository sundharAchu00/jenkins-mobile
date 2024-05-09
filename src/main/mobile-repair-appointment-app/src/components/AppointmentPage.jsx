import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShopsService from "../services/ShopsService";

const AppointmentPage = () => {
  const shopId = useParams().id;

  const navigate = useNavigate();

  const [appointment, setAppointment] = useState({
    pModel: "",
    rDescription: "",
    users: [
      {
        uId: localStorage.getItem("userId"),
      },
    ],
    shops: [
      {
        sId: shopId,
      },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(appointment);

    const modelRegex = "^([a-zA-Z][a-zA-Z0-9\\s]{5,49})?$";
    const descRegex = "^([a-zA-Z][a-zA-Z0-9\\s]{15,49})?$";

    if (appointment.pModel !== "" && appointment.rDescription !== "") {
      if (appointment.pModel.match(modelRegex)) {
        if (appointment.rDescription.match(descRegex)) {
          console.log(appointment);
          ShopsService.saveAppointment(appointment);
          navigate("/home");
        } else {
          alert(
            "please fill the accepted characters in pDesc " +
              appointment.rDescription
          );
          window.location.reload();
        }
      } else {
        alert(
          "please fill the accepted characters in pModel " + appointment.pModel
        );
        window.location.reload();
      }
    } else {
      alert("please fill out the form");
    }
  };

  return (
    <div>
      <div className="container border rounded  mt-5">
        <h4 className="text-center form-title">Appointment Form</h4>
        <div className="row p-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="phoneModel">
                <span className="fs-4 fw-medium ">Phone Model:</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneModel"
                name="pModel"
                value={appointment.pModel}
                onChange={(e) => {
                  e.preventDefault();
                  setAppointment({ ...appointment, pModel: e.target.value });
                }}
                placeholder="Enter phone model (minimum 5 letters)"
              />
            </div>
            <div className="form-group">
              <label htmlFor="repairDescription" title="repairDescription">
                <span className="fs-4 fw-medium "> Description of Repair:</span>
              </label>
              <textarea
                className="form-control"
                id="repairDescription"
                rows="3"
                name="rDescription"
                placeholder="Please the description of the issue (minimum 10 letters)"
                value={appointment.rDescription}
                onChange={(e) => {
                  e.preventDefault();
                  setAppointment({
                    ...appointment,
                    [e.target.name]: e.target.value,
                  });
                }}
              ></textarea>
            </div>
            <div className="form-group mt-2">
              <button
                type="submit"
                id="appoint-btn"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
