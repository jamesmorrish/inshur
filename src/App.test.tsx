import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('The application should load.', () => {
  const { getByText } = render(<App />);
  const loadingText = getByText(/Loading.../i);
  expect(loadingText).toBeInTheDocument();
});
