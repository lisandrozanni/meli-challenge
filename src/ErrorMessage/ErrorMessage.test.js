import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import waitForExpect from 'wait-for-expect';
import App from '../App';

describe('<ErrorMessage />', () => {
  test('shows message when no results were found', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    userEvent.type(screen.getByPlaceholderText('Nunca dejes de buscar'), 'adsadsasdas');
    userEvent.click(screen.getByTestId('search-box-icon'));
  
    waitForExpect(() => {
      expect(screen.getByText('No hay publicaciones que coincidan con tu búsqueda.')).not.toBeNull();
    }, 1000);
  });
});
