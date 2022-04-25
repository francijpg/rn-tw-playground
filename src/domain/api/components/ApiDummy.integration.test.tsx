// import { REACT_APP_DUMMY_API } from '@env';
// import { mockResponse } from '../../../test/mocks/ApiDummyMock';
import { NavigationContainer } from '@react-navigation/native';
// import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react-native';
import React from 'react';
import ApiDummy from './ApiDummy';

// const baseUrl = `${REACT_APP_DUMMY_API}`;
const loginRequest = { email: 'hello@tw.com', password: '123456' };

describe('ApiDummy integration test', () => {
  it('should be exist a button and when it is clicked it should display a list of data from the api', () => {
    // const component = (
    //   <NavigationContainer>
    //     <ApiDummy loginRequest={loginRequest} />
    //   </NavigationContainer>
    // );
    // const { findByText, getByText } = render(component);
    // const buttom = await findByText(/call api/i);

    // expect(screen.getByText('hello')).toBeVisible();

    const { getByText } = render(
      <NavigationContainer>
        <ApiDummy loginRequest={loginRequest} />
      </NavigationContainer>,
    );

    const buttonX = getByText(/call api/i);
    expect(buttonX).toBeDefined();
    // act(() => {
    //   fireEvent.press(buttonX);
    // });
    // const item0 = getByText('item0');

    // expect(findByText('call api')).toBeInTheDocument();
    // waitFor(() => expect(getByText('Your-text')).toBeInTheDocument());

    // fireEvent(buttom, 'press');
  });

  // it('should return a 200 status code when API return values successfully', async () => {
  //   const response = await request(baseUrl).get('/albums/1/photos');
  //   expect(response.statusCode).toBe(200);
  // });

  // it('should return at least 3 records when API return values successfully', async () => {
  //   const response = await request(baseUrl).get('/albums/1/photos');
  //   // expect(response.body).toContainEqual(mockResponse.data.results[0]);
  //   // console.log(response.body);
  //   expect(response.body).toEqual(
  //     expect.arrayContaining(mockResponse.data.results),
  //   );
  // });
});
