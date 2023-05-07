import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {ILatLng, IMarker} from '../../utils';

interface Props {
  type: string;
  title: string;
  overview: string;
  about: string;
  titleImages: any[];
  images: any[];
  location: IMarker;
}

export default function Details(props: Props) {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}

const localStyles = StyleSheet.create({});
