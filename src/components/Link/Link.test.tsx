import React from 'react';
import Link from './';
import { render } from '@testing-library/react-native';

describe('Testing Link Component', () => {
  it('should render a text', () => {
    // arrange
    const wrapper = render(<Link />);

    // act
    const text = wrapper.getByText('Olvidaste tu password?');

    // assert
    expect(text).toBeTruthy();
  });
});
