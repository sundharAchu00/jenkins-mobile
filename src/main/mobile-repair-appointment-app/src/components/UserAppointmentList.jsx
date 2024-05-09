import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";

const UserAppointmentList = () => {
  const [appointment, setAppointment] = useState([]);

  useEffect(() => {
    const appoint = JSON.parse(sessionStorage.getItem("user"));
    if (appoint) {
      console.log(appoint.appointments);
      setAppointment(appoint.appointments);
    }
  }, []);

  return (
    <div className="container h-100 mt-5 p-2  d-flex justify-content-center align-items-center border rounded ">
      <div className="container">
        <h2 className="text-center ">Your Appointments</h2>
        <div className="container mt-3">
          {appointment.map((appoint) => (
            <div
              key={appoint.aId}
              className=" border-bottom mb-4 p-3 shadow rounded"
            >
              <div className="row mb-1  ">
                <div className="col-3">
                  <span className="fw-bold ">Appointment Id :</span>
                </div>
                <div className="col-4">
                  <span>{appoint.aId}</span>
                </div>
              </div>
              {/* second row mb-1  */}
              <div className="row mb-1  ">
                <div className="col-3">
                  <span className="fw-bold ">Shop name :</span>
                </div>
                <div className="col-4">
                  <span>{appoint.shops.sName}</span>
                </div>
              </div>
              {/* third row mb-1  */}
              <div className="row mb-1  ">
                <div className="col-3">
                  <span className="fw-bold ">Operating hours :</span>
                </div>
                <div className="col-4">
                  <span>{appoint.shops.sOpertingHours}</span>
                </div>
              </div>
              {/* fourth row mb-1  */}
              <div className="row mb-1  ">
                <div className="col-3">
                  <span className="fw-bold ">Rating :</span>
                </div>
                <div className="col-4">
                  <span>
                    <Rating
                      name="read-only"
                      value={appoint.shops.sRating}
                      precision={0.5}
                      readOnly
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserAppointmentList;
