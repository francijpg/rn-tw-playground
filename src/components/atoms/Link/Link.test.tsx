import React from 'react';
import Link from '.';
import { render } from '@testing-library/react-native';

describe('Testing Link Component', () => {
  it('should render a text', () => {
    // arrange
    const wrapper = render(
      <Link url="https://google.com" text="Olvidaste tu password?" />,
    );

    // act
    const text = wrapper.getByText('Olvidaste tu password?');

    // assert
    expect(text).toBeTruthy();
  });
});
