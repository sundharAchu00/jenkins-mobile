import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ShopsService from "../services/ShopsService";
import AppointmentPage from "../components/AppointmentPage";

jest.mock("../services/ShopsService");

describe("AppointmentPage", () => {
  const shopId = "1";
  const navigate = jest.fn();

  beforeEach(() => {
    navigate.mockReset();
    ShopsService.saveAppointment.mockReset();
  });

  it("renders the appointment form with input fields and a submit button", () => {
    ShopsService.saveAppointment.mockResolvedValue({ data: {} });

    render(<AppointmentPage shopId={shopId} navigate={navigate} />);

    expect(screen.getByText("Appointment Form")).toBeInTheDocument();
    // Getting input field by placeholder text
    expect(
      screen.getByPlaceholderText("Enter phone model (minimum 5 letters)")
    ).toBeInTheDocument();
    // Getting input field by title
    expect(screen.getByTitle("repairDescription")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("submits the form with the correct data and navigates to the homepage", async () => {
    const appointmentData = {
      pModel: "iPhone 12",
      rDescription: "Broken screen due to some bad usage",
      users: [
        {
          uId: 1,
        },
      ],
      shops: [
        {
          sId: 1,
        },
      ],
    };

    const saveAppointmentSpy = jest.spyOn(ShopsService, "saveAppointment");

    render(<AppointmentPage shopId={shopId} navigate={navigate} />);

    // Getting input field by placeholder text
    const pModelInput = screen.getByPlaceholderText(
      "Enter phone model (minimum 5 letters)"
    );
    // Getting input field by placeholder text
    const repairDescriptionInput = screen.getByPlaceholderText(
      "Please the description of the issue (minimum 10 letters)"
    );
    const submitButton = screen.getByText("Submit");

    fireEvent.change(pModelInput, {
      target: { value: appointmentData.pModel },
    });
    fireEvent.change(repairDescriptionInput, {
      target: { value: appointmentData.rDescription },
    });
    fireEvent.click(submitButton);

    // Expect saveAppointment method to be called once
    expect(saveAppointmentSpy).toHaveBeenCalledTimes(1);
    // Assert that it navigates to the correct URL
    expect(window.location.pathname).toBe("/");
  });
});
