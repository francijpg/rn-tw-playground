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
  it('should ', () => {
    const wrapper = render(
      <NavigationContainer>
        <ApiDummy loginRequest={loginRequest} />
      </NavigationContainer>,
    );
    // const textButtom = screen.findByText(/call api/i);
    const textButtom = wrapper.getByText(/call api/i);
    // expect(textButtom).toBeInTheDocument();
    expect(textButtom).toBeTruthy();
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
