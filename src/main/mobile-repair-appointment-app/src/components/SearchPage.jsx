import React, { useEffect, useState } from "react";
import ShopsService from "../services/ShopsService";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [shop, setShop] = useState([]);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/appoint/${id}`);
  };

  useEffect(() => {
    ShopsService.getAllShops()
      .then((res) => {
        console.log(res.data);
        setShop(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-3">
      <div className="container p-2 mt-4">
        {shop.map((shop) => (
          <div
            key={shop.sId}
            className="container lists border rounded mb-2 p-2 d-flex justify-content-between h-100 align-items-end"
          >
            <div className=" d-flex flex-column  ">
              <span className="fw-bold  fs-5 ">Shop name : {shop.sName}</span>
              <span className="fw-bold  fs-5 ">Contact : {shop.sContact}</span>
              <span className="fw-bold  fs-5 ">
                Operating Hours : {shop.sOpertingHours}
              </span>
              <span className="fw-bold  fs-5 ">Address : {shop.sLocation}</span>
              <span>
                <Rating
                  name="read-only"
                  value={shop.sRating}
                  precision={0.5}
                  readOnly
                />
              </span>
            </div>
            <div>
              <input
                type="button"
                id={`book-btn${shop.sId}`}
                className="btn btn-outline-success "
                value="Book"
                onClick={() => handleClick(shop.sId)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
