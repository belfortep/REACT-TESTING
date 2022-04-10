import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders 3 list items', () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem");//busca todos los que tengan el tag role="algunrol", de forma predeterminada los li tienen listitem 
  expect(listItems).toHaveLength(3);
});

test('renders title', () => {
  render(<App />);
  const title = screen.getByTestId("testid");
  expect(title).toBeInTheDocument();
});



test('sum be 6', () => {
  render(<App/>);
  const suma = screen.getByTitle("suma");
  expect(suma.textContent).toBe("6");
});