import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Button, Menu, MenuItem } from "@mui/material";

const NavBar = () => {
  const [user, setuser] = useState({});
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    document.title = "Home Page";
    let id = localStorage.getItem("userId");
    UserService.getUserById(id)
      .then((res) => {
        console.log(res.data);
        setuser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleProfileClick = (id) => {
    console.log(id);
    sessionStorage.setItem("user", JSON.stringify(user));
    navigate(`/profile`);
  };

  const handleLogOut = () => {
    localStorage.removeItem("userId");
    sessionStorage.removeItem("user");
    sessionStorage.setItem("login", false);
    navigate("/");
  };

  return (
    <div>
      <div className="container-fluid ps-4 pe-4  bg-info p-2 h-25 d-flex  justify-content-between  ">
        <div>
          <Link to="/home" className="text-decoration-none text-white ">
            <h2 className="shop-name">SMS Repairs</h2>
          </Link>
        </div>
        <div className="d-flex">
          <div className="d-flex align-items-center">
            {/* <h4 className="ms-2 text-white usr-name">{user.uName}</h4> */}
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              className="text-white usr-name fw-bold nav-item"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuOpenIcon className="text-white" sx={{ fontWeight: 200 }} />
              Menu
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{ marginTop: 5 }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem
                onClick={() => {
                  handleProfileClick(user.uId);
                  handleClose();
                }}
              >
                <AccountCircleIcon />
                My profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  className="text-decoration-none text-black"
                  to="/usrAppoint"
                >
                  <ListAltIcon />
                  Appointment
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div
                  className="d-flex align-items-center btn "
                  onClick={handleLogOut}
                >
                  <LogoutIcon /> logout
                </div>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
