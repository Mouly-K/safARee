import {View, useWindowDimensions, Animated, StyleSheet} from 'react-native';
import React from 'react';

import {colors} from '../../styles/colors';

export default function Paginator(props: any) {
  const {width} = useWindowDimensions();

  return (
    <View style={localStyles.container}>
      {props.data.map((_: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = props.scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        const opacity = props.scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[localStyles.dot, {width: dotWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {flexDirection: 'row', marginTop: 20},
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.orange,
    marginHorizontal: 8,
  },
});
