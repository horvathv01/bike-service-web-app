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
          bikeType: 'Sport',
          wheelSize: '17 inches',
          frameSize: 'Medium',
          state: 'Active',
          insured: true,
        },
        // Add more sample bike objects as needed
        {
          id: 2,
          manufacturer: 'Honda',
          model: 'CBR',
          vin: '123456789',
          bikeType: 'Sport',
          wheelSize: '17 inches',
          frameSize: 'Medium',
          state: 'Active',
          insured: true,
        },
        {
          id: 3,
          manufacturer: 'Honda',
          model: 'CBR',
          vin: '123456789',
          bikeType: 'Sport',
          wheelSize: '17 inches',
          frameSize: 'Medium',
          state: 'Active',
          insured: true,
        },
        {
          id: 4,
          manufacturer: 'Honda',
          model: 'CBR',
          vin: '123456789',
          bikeType: 'Sport',
          wheelSize: '17 inches',
          frameSize: 'Medium',
          state: 'Active',
          insured: true,
        },
        {
          id: 5,
          manufacturer: 'Honda',
          model: 'CBR',
          vin: '123456789',
          bikeType: 'Sport',
          wheelSize: '17 inches',
          frameSize: 'Medium',
          state: 'Active',
          insured: true,
        },
        {
          id: 6,
          manufacturer: 'Honda',
          model: 'CBR',
          vin: '123456789',
          bikeType: 'Sport',
          wheelSize: '17 inches',
          frameSize: 'Medium',
          state: 'Active',
          insured: true,
        }
      ]),
    });

    // Render the BikeDisplay component within a BrowserRouter
    render(
      <BrowserRouter>
        <BikeDisplay />
      </BrowserRouter>
    );

    // Wait for the bike list to be fetched and rendered
    await waitFor(() => screen.findByText('Honda CBR'));

    // Assert that the bike list is rendered correctly
    expect(screen.getByText('Honda CBR')).toBeInTheDocument();
/*     expect(screen.getByText('VIN: 123456789')).toBeInTheDocument();*/
    expect(screen.getByText('Type:' /* Sport' */)).toBeInTheDocument();
    expect(screen.getByText('Wheel Size: 17 inches')).toBeInTheDocument();
    expect(screen.getByText('Frame Size: Medium')).toBeInTheDocument();
    expect(screen.getByText('State: Active')).toBeInTheDocument();
    expect(screen.getByText('Insured: yes')).toBeInTheDocument(); 
  });

  // Add more test cases as needed
});