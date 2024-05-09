import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import ShopsService from "../services/ShopsService";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/NavBar";
import SearchPage from "../components/SearchPage";

jest.mock("../services/ShopsService"); // Mock the ShopsService

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

const mockedNavigate = jest.fn();

describe("NavBar", () => {
  beforeEach(() => {
    ShopsService.getuser.mockResolvedValueOnce({
      data: {
        uId: 1,
        uName: "Test User",
      },
    });
  });

  // Test to check if user name is displayed in NavBar
  it("renders user name", async () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    // Wait for user data to be fetched and displayed
    await waitFor(() => {
      expect(screen.getByText("Test User")).toBeInTheDocument();
    });
  });
});
