import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import CustomButton from './CustomButton';

const TITLE_BUTTON_ONE = 'Test';

describe('Testing the custom button Component in a happy path', () => {
  test('should render a text inner the button', () => {
    // arrange
    const wrapper = render(<CustomButton title={TITLE_BUTTON_ONE} />);

    // act
    const text = wrapper.getByText(TITLE_BUTTON_ONE);

    // assert
    expect(text).toBeTruthy();
  });

  test('should thow an action when do clic on it', async () => {
    // arrange
    var isCallbackClicked = false;
    const wrapper = render(
      <CustomButton
        title={TITLE_BUTTON_ONE}
        onPressFunction={() => {
          isCallbackClicked = true;
        }}
      />,
    );
    const button = wrapper.getByText(TITLE_BUTTON_ONE);

    // act
    fireEvent.press(button);

    // assert
    await waitFor(() => expect(isCallbackClicked).toBe(true));
  });
});
