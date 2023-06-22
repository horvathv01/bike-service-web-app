import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import User from '../Components/User/User';

describe('User component', () => {
  test('renders User component correctly', () => {
    render(<BrowserRouter><User /></BrowserRouter>);
    const headerElement = screen.getByTestId('header');
    const userDisplayElement = screen.getByTestId('user-display');

    expect(headerElement).toBeInTheDocument();
    expect(userDisplayElement).toBeInTheDocument();
  });
});
