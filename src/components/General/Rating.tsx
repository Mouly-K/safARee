import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../styles/colors';

export default function Rating(props: any) {
  const [rating, setRating] = useState(0);
  const [maxRating, setMaxRating] = useState(5);

  useEffect(() => {
    setRating(parseInt(props.rating));
    setMaxRating(parseInt(props.maxRating));
  }, [props.rating, props.maxRating]);

  return (
    <View style={localStyles.container}>
      {[...Array(rating)].map((_: any, index: number) => (
        <AntDesign
          name="star"
          key={index}
          size={16}
          color={colors.yellow}
          style={localStyles.star}
        />
      ))}
      {[...Array(maxRating - rating)].map((_: any, index: number) => (
        <AntDesign
          name="star"
          key={index}
          size={16}
          color={colors.lightGrey}
          style={localStyles.star}
        />
      ))}
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  star: {
    marginRight: 5,
  },
});
