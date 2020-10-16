import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Join from './components/join';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('show join app',()=>{
  it('renders join',()=>{
    const {getByText} = render(<Join />)
    const element = getByText(/join/)
    expect('join').toBeInTheDocument()
  })
})
