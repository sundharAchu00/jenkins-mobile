import axios from "axios";
import { Component } from "react";

const USER_URL = "http://localhost:1011/user/";

class UserService extends Component {
  getUser(email) {
    return axios.post(USER_URL + email);
  }

  getUserById(id) {
    return axios.get(USER_URL + id);
  }
}
const userService = new UserService();
export default userService;
