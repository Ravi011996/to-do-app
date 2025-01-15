import { render, screen } from '@testing-library/react';
import { renderStatusChip, renderPriorityChip } from './task.utils'// Adjust the import path accordingly

describe('renderStatusChip', () => {
  test('renders Completed status chip', () => {
    render(renderStatusChip('Completed'));
    const chipElement = screen.getByText(/completed/i);
    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveClass('MuiChip-colorSuccess');
  });

  test('renders In Progress status chip', () => {
    render(renderStatusChip('In Progress'));
    const chipElement = screen.getByText(/in progress/i);
    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveClass('MuiChip-colorPrimary');
  });

  test('renders Cancelled status chip', () => {
    render(renderStatusChip('Cancelled'));
    const chipElement = screen.getByText(/cancelled/i);
    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveClass('MuiChip-colorError');
  });

  test('renders default color chip for unknown status', () => {
    render(renderStatusChip('Unknown Status'));
    const chipElement = screen.getByText(/unknown status/i);
    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveClass('MuiChip-colorDefault');
  });
});

describe('renderPriorityChip', () => {
  test('renders High priority chip', () => {
    render(renderPriorityChip('High'));
    const chipElement = screen.getByText(/high/i);
    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveClass('MuiChip-colorError');
  });

  test('renders Medium priority chip', () => {
    render(renderPriorityChip('Medium'));
    const chipElement = screen.getByText(/medium/i);
    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveClass('MuiChip-colorWarning');
  });

  test('renders Low priority chip', () => {
    render(renderPriorityChip('Low'));
    const chipElement = screen.getByText(/low/i);
    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveClass('MuiChip-colorSuccess');
  });

  test('renders default color chip for unknown priority', () => {
    render(renderPriorityChip('Unknown Priority'));
    const chipElement = screen.getByText(/unknown priority/i);
    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveClass('MuiChip-colorDefault');
  });
});