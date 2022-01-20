import React from 'react';
import {StyleSheet, View} from 'react-native';
import Slider from './src/Slider/Slider';
// import RotatingSquare from './src/RotatingSquare';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <RotatingSquare /> */}
      <Slider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
