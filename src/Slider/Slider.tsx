import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {diffClamp, sub, Value} from 'react-native-reanimated';

import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Thumb from './Thumb';

import {onGestureEvent, withOffset} from 'react-native-redash/lib/module/v1';
const SIZE = 28;
const SLIDER_WIDTH = Dimensions.get('window').width - 50;

export default function App() {
  const state = new Value(State.UNDETERMINED);
  const translationX = new Value(0);
  const gestureHandler = onGestureEvent({state, translationX});
  const translateX = diffClamp(
    withOffset(translationX, state),
    0,
    SLIDER_WIDTH,
  );
  // const translateX = sub(x, SIZE / 2);
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.slider}>
        <PanGestureHandler {...gestureHandler}>
          <Animated.View style={{transform: [{translateX}]}}>
            <Thumb />
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedStyle: {
    // width: SIZE, height: SIZE
  },
  slider: {
    width: SLIDER_WIDTH,
    height: 20,
  },
  rail: {
    height: 2,
    backgroundColor: 'gray',
    borderradius: 50,
  },
});
