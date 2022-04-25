import Label from '@src/components/atoms/Label';
import { ApiDummyPhotos } from '@src/entities/ApiDummy';
import React, { FC } from 'react';
import { Image, Text, ScrollView, View } from 'react-native';
import styles from './ApiDummy.style';

type Props = {
  photosArray: ApiDummyPhotos[];
};

const ApiDummyList: FC<Props> = ({ photosArray }) => {
  return (
    <ScrollView>
      {photosArray.map((photo, i) => (
        <View key={i} style={styles.containerImage}>
          <Image
            style={styles.image}
            source={{
              uri: photo.thumbnailUrl,
            }}
          />
          <View style={styles.cardContent}>
            <Text style={styles.title}>
              {photo.id} | {photo.title}
            </Text>
            <View style={styles.data}>
              <Label>
                source: <Text style={styles.source}>{photo.url}</Text>
              </Label>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default ApiDummyList;
