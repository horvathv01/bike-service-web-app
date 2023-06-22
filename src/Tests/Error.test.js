import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useLocation, useNavigate } from 'react-router-dom';
import Error from '../Components/ActionResponse/Error';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('Error component', () => {
  test('renders error message and handles "Go Back" button click', () => {
    const mockLocation = {
      state: {
        message: 'Sample error message',
      },
    };

    const mockNavigate = jest.fn();

    useLocation.mockReturnValue(mockLocation);
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );

    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('Sample error message')).toBeInTheDocument();

    const goBackButton = screen.getByText('Go Back');
    fireEvent.click(goBackButton);

    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  // Add more test cases as needed
});
