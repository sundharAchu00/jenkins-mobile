import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState({});

  console.log(user);

  useEffect(() => {
    const usr = JSON.parse(sessionStorage.getItem("user"));
    if (usr) {
      console.log(JSON.parse(sessionStorage.getItem("user")));
      setUser(usr);
    }
  }, []);

  return (
    <div className="container h-100 mt-5 p-2 shadow  d-flex justify-content-center align-items-center border rounded ">
      <div className="container">
        <h2 className="text-center ">User profile</h2>
        <div className="container mt-3">
          <div className="row ">
            <div className="col-2">
              <span className="fw-bold ">UserId :</span>
            </div>
            <div className="col-4">
              <span>{user.uId}</span>
            </div>
          </div>
          {/* second row */}
          <div className="row ">
            <div className="col-2">
              <span className="fw-bold ">Username :</span>
            </div>
            <div className="col-4">
              <span>{user.uName}</span>
            </div>
          </div>
          {/* third row */}
          <div className="row ">
            <div className="col-2">
              <span className="fw-bold ">Contact :</span>
            </div>
            <div className="col-4">
              <span>{user.uContact}</span>
            </div>
          </div>
          {/* fourth row */}
          <div className="row ">
            <div className="col-2">
              <span className="fw-bold ">Email :</span>
            </div>
            <div className="col-4">
              <span>{user.uEmail}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
