import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import waitForExpect from 'wait-for-expect';
import App from '../App';

describe('<ItemDetail />', () => {
  test('navigates to item detail when item in list is clicked', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  
    userEvent.type(screen.getByPlaceholderText('Nunca dejes de buscar'), 'Ducati');
    userEvent.click(screen.getByTestId('search-box-icon'));
  
    waitForExpect(async () => {
      userEvent.click(screen.getByText('Ducati Diavel Dark 2016 - Unica En El País!'));
      
      await waitForExpect(() => {
        expect(getByText('Descripción del producto').not.toBeNull());
      }, 1000);
    }, 1000);
  });
});
