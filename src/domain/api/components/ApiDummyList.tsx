import React, { FC, Fragment } from 'react';
import { Image, Text, ScrollView, View } from 'react-native';
import { ApiDummyPhotos } from '../../../entities/ApiDummy';
import styles from './ApiDummy.style';

type Props = {
  photosArray: ApiDummyPhotos[];
};

const ApiDummyList: FC<Props> = ({ photosArray }) => {
  return (
    <ScrollView>
      <View style={styles.containerImage}>
        {photosArray.map((photo, i) => (
          <Fragment key={i}>
            <Text>
              {photo.id} | {photo.title}
            </Text>
            <Image
              style={styles.image}
              source={{
                uri: photo.thumbnailUrl,
              }}
            />
          </Fragment>
        ))}
      </View>
    </ScrollView>
  );
};

export default ApiDummyList;
