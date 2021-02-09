import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import waitForExpect from 'wait-for-expect';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('<App />', () => {
  test('returns to main page when logo is clicked', () => {
    render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    );
    
    userEvent.type(screen.getByPlaceholderText('Nunca dejes de buscar'), 'iPod');
    userEvent.click(screen.getByTestId('search-box-icon'));

    waitForExpect(() => {
      userEvent.click(screen.getByAltText('Logo Mercado Libre'));
      waitForExpect(() => {
        expect(screen.getByText('iPod 80 Gb Usado')).toBeNull();
      }, 1000);
    }, 1000);
  });
});
