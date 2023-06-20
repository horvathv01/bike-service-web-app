import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import User from '../Components/User/User';

describe('User component', () => {
  test('renders User component correctly', () => {
    const { getByTestId } = render(<BrowserRouter><User /></BrowserRouter>);
    const headerElement = getByTestId('header');
    const userDisplayElement = getByTestId('user-display');

    expect(headerElement).toBeInTheDocument();
    expect(userDisplayElement).toBeInTheDocument();
  });
});
