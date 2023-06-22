import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BikeDisplay from '../Components/Bike/BikeDisplay';

describe('BikeDisplay component', () => {
  test('renders bike list correctly', async () => {
    // Mock the fetch function and provide a sample response
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        {
          id: 1,
          manufacturer: 'Honda',
          model: 'CBR',
          vin: '123456789',
          bikeType: 'Trekking',
          wheelSize: '17',
          frameSize: 'Medium',
          state: 'Active',
          insured: true,
        }
      ]),
    });

    // Render the BikeDisplay component within a BrowserRouter
    const view = await render(
      <BrowserRouter>
        <BikeDisplay />
      </BrowserRouter>
    );

    // Wait for the bike list to be fetched and rendered
    await waitFor(() => screen.findByText('Honda CBR'));

    // Assert that the bike list is rendered correctly
    expect(screen.getByTestId('cardtext')).toHaveTextContent('VIN: 123456789');
    expect(screen.getByTestId('cardtext')).toHaveTextContent('Type: Trekking');
    expect(screen.getByTestId('cardtext')).toHaveTextContent('Wheel Size: 17');
    expect(screen.getByTestId('cardtext')).toHaveTextContent('Frame Size: Medium');
    expect(screen.getByTestId('cardtext')).toHaveTextContent('State: Active');
    expect(screen.getByTestId('cardtext')).toHaveTextContent('Insured: yes');
  });
});