import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import TaskActions from "./task-actions.component";
import "@testing-library/jest-dom";

describe("TaskActions Component", () => {
  test("renders 'Add Task' button and links to '/add'", () => {
    render(
      <Router>
        <TaskActions />
      </Router>
    );

    // Check if 'Add Task' button is rendered using getByRole for button
    const addTaskButton = screen.getByRole("link", { name: /Add Task/i });
    expect(addTaskButton).toBeInTheDocument();

    // Verify the link directs to '/add'
    expect(addTaskButton).toHaveAttribute("href", "/add");
  });

  test("renders 'Calendar' button and links to '/calendar'", () => {
    render(
      <Router>
        <TaskActions />
      </Router>
    );

    // Check if 'Calendar' button is rendered using getByRole for button
    const calendarButton = screen.getByRole("link", { name: /Calendar/i });
    expect(calendarButton).toBeInTheDocument();

    // Verify the link directs to '/calendar'
    expect(calendarButton).toHaveAttribute("href", "/calendar");
  });

  test("applies correct style to 'Calendar' button", () => {
    render(
      <Router>
        <TaskActions />
      </Router>
    );

    const calendarButton = screen.getByRole("link", { name: /Calendar/i });

    const buttonStyles = window.getComputedStyle(calendarButton);
    expect(buttonStyles.margin).toBe("");
  });
});
