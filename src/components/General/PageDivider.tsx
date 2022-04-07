import {Animated, View, useWindowDimensions} from 'react-native';
import React, {useState, useRef, useEffect, Children, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {FlatList} from 'react-native-gesture-handler';

import {colors} from '../../styles/colors';

import PageDividerPaginator from './PageDividerPaginator';

export default function PageDivider(props: any) {
  const {width} = useWindowDimensions();
  const [children, setChildren] = useState(
    Children.toArray(props.children).map((item: any, index: number) => ({
      id: index.toString(),
      child: item,
    })),
  );
  const slidesRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    props.setCurrentPage &&
      props.setCurrentPage(props.pages[viewableItems[0].index]);
  }).current;

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
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
    </View>
  );
}
