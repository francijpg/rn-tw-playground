import request from 'supertest';
import { REACT_APP_DUMMY_API } from '@env';
import { mockResponse } from '../../tests/mocks/ApiDummyMock';

const baseUrl = `${REACT_APP_DUMMY_API}`;

describe('Consuming API Dummy EndPoint', () => {
  // beforeEach(() => {
  //   jest.mock('../test/mocks/ApiDummyMock');
  // });

  it('should return a 200 status code when API return values successfully', async () => {
    const response = await request(baseUrl).get('/albums/1/photos');
    expect(response.statusCode).toBe(200);
  });

  it('should return at least 3 records when API return values successfully', async () => {
    const response = await request(baseUrl).get('/albums/1/photos');
    // expect(response.body).toContainEqual(mockResponse.data.results[0]);
    // console.log(response.body);
    expect(response.body).toEqual(
      expect.arrayContaining(mockResponse.data.results),
    );
  });
});
