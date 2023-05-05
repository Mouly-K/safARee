import {FlatList, Animated, View} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';

import Paginator from './Paginator';

export default function Carousel(props: any) {
  const slidesRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    props.setCurrentIndex(viewableItems[0].index);
  }).current;

  useEffect(() => {
    slidesRef?.current?.scrollToIndex({
      index: props.currentIndex,
      animated: true,
    });
  }, [props.currentIndex]);

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        initialScrollIndex={0}
        data={props.data}
        renderItem={props.renderItem}
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
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      {props.showPagination === true ? (
        <Paginator data={props.data} scrollX={scrollX} />
      ) : null}
    </View>
  );
}
