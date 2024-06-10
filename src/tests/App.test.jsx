import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { ModalProvider } from '../store/ModalContext';
import App from '../App';
import { test } from 'vitest';

// the wrapper that includes the router
const AppWrapper = ({ initialEntries }) => (
  <MemoryRouter initialEntries={initialEntries}>
    <ModalProvider>
      <App />
    </ModalProvider>
  </MemoryRouter>
);

test('renders Home page for root route', () => {
  render(<AppWrapper initialEntries={['/']} />);
});
