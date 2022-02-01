import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Bhnlegalconsent from './Bhnlegalconsent';

describe('<Bhnlegalconsent />', () => {
  test('it should mount', () => {
    render(<Bhnlegalconsent />);
    
    const bhnlegalconsent = screen.getByTestId('Bhnlegalconsent');

    expect(bhnlegalconsent).toBeInTheDocument();
  });
});