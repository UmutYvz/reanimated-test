import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const THUMB_SIZE = 28;
export default function Thumb() {
  return (
    <View style={styles.thumb}>
      <Image style={styles.image} source={require('../../move.png')} />
    </View>
  );
}
const styles = StyleSheet.create({
  thumb: {
    backgroundColor: '#a9cbee',
    borderRadius: 50,
    width: THUMB_SIZE,
    height: THUMB_SIZE,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});
