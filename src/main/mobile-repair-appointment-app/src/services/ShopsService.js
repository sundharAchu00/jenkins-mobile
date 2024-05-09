import axios from "axios";
import { Component } from "react";

const API_URL = "http://localhost:1011/shops";

const APPOINTMENT_URL = "http://localhost:1011/appointment";

class ShopsService extends Component {
  async getAllShops() {
    try {
      const response = await axios.get(API_URL);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  saveAppointment(appointment) {
    return axios.post(APPOINTMENT_URL, appointment);
  }
}

const shopsService = new ShopsService();

export default shopsService;
