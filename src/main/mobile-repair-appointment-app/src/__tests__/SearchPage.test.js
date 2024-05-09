import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShopsService from "../services/ShopsService"; // Import the ShopsService or mock it if needed
import SearchPage from "../components/SearchPage";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";

jest.mock("../services/ShopsService"); // Mock the ShopsService

describe("SearchPage", () => {
  beforeEach(() => {
    ShopsService.getAllShops.mockResolvedValueOnce({
      data: [
        {
          sId: 1,
          sName: "Test Shop",
          sContact: "1234567890",
          sOpertingHours: "9:00 AM - 5:00 PM",
          sLocation: "123 Main St",
          sRating: 4.5,
        },
      ],
    });
  });

  it("renders shop data", async () => {
    render(
      <Router>
        <SearchPage />
      </Router>
    );

    // Wait for shop data to be fetched and displayed
    await waitFor(() => {
      expect(screen.getByText("Shop name : Test Shop")).toBeInTheDocument();
    });
  });

  it("navigates to appointment page on button click", async () => {
    render(
      <Router>
        <SearchPage />
      </Router>
    );

    // Wait for shop data to be fetched and displayed
    await waitFor(() => {
      expect(screen.getByText("Shop name : Test Shop")).toBeInTheDocument();
    });

    // Click on the book button
    const bookButton = screen.getByRole("button", { title: "book" });
    userEvent.click(bookButton);

    // Assert that it navigates to the correct URL
    expect(window.location.pathname).toBe("/appoint/1");
  });
});
