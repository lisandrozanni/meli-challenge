import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import waitForExpect from 'wait-for-expect';
import App from '../App';

describe('<SearchBox />', () => {
  test('renders without crashing', () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(container.innerHTML).toMatch('Nunca dejes de buscar');
  });

  test('navigates to items list when search is made', () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  
    userEvent.type(screen.getByPlaceholderText('Nunca dejes de buscar'), 'iPhone');
    userEvent.click(screen.getByTestId('search-box-icon'));
  
    waitForExpect(() => {
      expect(container.innerHTML).toMatch('iPhone 11 64 Gb (product)red');
    }, 1000);
  });
});

