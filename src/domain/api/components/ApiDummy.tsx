import React, { FC, useState } from 'react';
import { Button, View } from 'react-native';
import ApiDummyList from './ApiDummyList';
import { ApiDummyPhotos } from '../../../entities/ApiDummy';
import styles from './ApiDummy.style';
import { getPhotos } from '../../../utils/apiDummy';

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
    const { data, status } = await getPhotos();
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
