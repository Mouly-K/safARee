import {FlatList, Animated, View, useWindowDimensions} from 'react-native';
import React, {useState, useRef, useEffect, Children, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {colors} from '../../styles/colors';

import PageDividerPaginator from './PageDividerPaginator';

export default function Carousel(props: any) {
  const {width} = useWindowDimensions();
  const [children, setChildren] = useState(
    Children.toArray(props.children).map((item: any, index: number) => ({
      id: index.toString(),
      child: item,
    })),
  );
  const slidesRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    useCallback(() => {
      setChildren(
        Children.toArray(props.children).map((item: any, index: number) => ({
          id: index.toString(),
          child: item,
        })),
      );
    }, [props.children]),
  );

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {props.showPagination === true ? (
        <PageDividerPaginator data={props.pages} scrollX={scrollX} />
      ) : null}
      <FlatList
        initialScrollIndex={0}
        data={children}
        renderItem={({item, index}: any) => (
          <View style={[{width}]}>{item.child}</View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={32}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
    </View>
  );
}
