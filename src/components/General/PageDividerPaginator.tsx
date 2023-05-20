import {
  View,
  useWindowDimensions,
  Animated,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';

import {colors} from '../../styles/colors';
import {styles} from '../../styles/styles';

export default function PageDividerPaginator(props: any) {
  const {width} = useWindowDimensions();

  return (
    <View style={localStyles.container}>
      {props.data.map((item: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const opacity = props.scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        const textColor = props.scrollX.interpolate({
          inputRange,
          outputRange: [colors.black, colors.orange, colors.black],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[localStyles.dot, {opacity, width: width / 2.5}]}
            key={i.toString()}>
            <Animated.Text style={[styles.regular, {color: textColor}]}>
              {item}
            </Animated.Text>
          </Animated.View>
        );
      })}
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 20,
    backgroundColor: colors.white,
  },
  dot: {
    padding: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.orange,
  },
});
