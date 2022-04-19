import React, { FC, useState } from 'react';
import { Button, View } from 'react-native';

import axios from 'axios';
import ApiDummyList from './ApiDummyList';
import { ApiDummyPhotos } from '../../../entities/ApiDummy';
import styles from './ApiDummy.style';
import { REACT_APP_DUMMY_API } from '@env';

export const getPosts = async () => {
  return await axios.get(`${REACT_APP_DUMMY_API}/albums/1/photos`);
};

type ApiDummyProps = {
  loginRequest: { email: string; password: string };
};

const ApiDummy: FC<ApiDummyProps> = ({
  loginRequest = { email: 'hello@tw.com', password: '123456' },
}) => {
  const [photos, setPhotos] = useState<ApiDummyPhotos[]>([]);
  const { email } = loginRequest;

  if (!email) {
    console.log('email is empty');
    return null;
  }
  const handleRequest = async () => {
    const { data, status } = await getPosts();
    if (status === 200) {
      setPhotos(data);
    }
    if (status >= 500) {
      console.log('An Error Occurred');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Press me" onPress={() => handleRequest()} />
      {photos && <ApiDummyList photosArray={photos} />}
    </View>
  );
};

export default ApiDummy;
