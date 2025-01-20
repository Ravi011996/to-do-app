import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthButton from "./auth-button.component";
import { UserContext } from "../../contexts/user.context";
import "@testing-library/jest-dom";

describe("AuthButton Component", () => {
  test("renders 'Sign In' button when currentUser is null", () => {
    render(
      <Router>
        <UserContext.Provider value={{ currentUser: null, setCurrentUser: jest.fn() }}>
          <AuthButton />
        </UserContext.Provider>
      </Router>
    );

    const signInButton = screen.getByRole("button", { name: /Sign In/i });
    expect(signInButton).toBeInTheDocument();

    const signInLink = screen.getByRole("link", { name: /Sign In/i });
    expect(signInLink).toHaveAttribute("href", "/login");
  });

  test("renders 'Sign Out' button when currentUser is not null", () => {
    const mockSetCurrentUser = jest.fn();

    render(
      <Router>
        <UserContext.Provider value={{ currentUser: { name: "John Doe" }, setCurrentUser: mockSetCurrentUser }}>
          <AuthButton />
        </UserContext.Provider>
      </Router>
    );

    const signOutButton = screen.getByRole("button", { name: /Sign Out/i });
    expect(signOutButton).toBeInTheDocument();

    const signOutLink = screen.getByRole("link", { name: /Sign Out/i });
    expect(signOutLink).toHaveAttribute("href", "/login");
  });

  test("calls setCurrentUser(null) on 'Sign Out' button click", () => {
    const mockSetCurrentUser = jest.fn();

    render(
      <Router>
        <UserContext.Provider value={{ currentUser: { name: "John Doe" }, setCurrentUser: mockSetCurrentUser }}>
          <AuthButton />
        </UserContext.Provider>
      </Router>
    );

    const signOutButton = screen.getByRole("button", { name: /Sign Out/i });
    fireEvent.click(signOutButton);

    expect(mockSetCurrentUser).toHaveBeenCalledWith(null);
  });
});
