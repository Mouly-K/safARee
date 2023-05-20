import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useState, useMemo, useRef, useCallback} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Dropdown} from 'react-native-element-dropdown';
import {Slider} from '@miblanchard/react-native-slider';
import AntDesign from 'react-native-vector-icons/AntDesign';

import FilterIcon from '../../assets/filter-icon.svg';
import PriceRangeBackground from '../../assets/price-range-background.svg';

import StyledButton from './StyledButton';

import {colors} from '../../styles/colors';
import {styles} from '../../styles/styles';

const sortByData = [{label: 'Price'}, {label: 'Distance'}, {label: 'Rating'}];
const sortByDataRestaurant = [{label: 'Distance'}, {label: 'Rating'}];
const ratings = [0, 1, 2, 3, 4, 5];

export default function Filter(props: any) {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['40%', '95%'], []);

  // callbacks
  const openModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const closeModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const [recentSearches, setRecentSearches] = useState([]);
  const [recentSearchInputValue, setRecentSearchInputValue] = useState('');

  const [dropDownValue, setDropDownValue] = useState('');
  const [isDropDownFocus, setIsDropDownFocus] = useState(false);

  const [currentRating, setCurrentRating] = useState(0);
  const [priceRange, setPriceRange] = useState([200, 1000]);

  return (
    <View style={localStyles.filterContainer}>
      <Pressable onPress={openModal}>
        <FilterIcon />
      </Pressable>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}>
        <ScrollView contentContainerStyle={localStyles.modalContentContainer}>
          <Text style={[styles.bold, {textAlign: 'center'}]}>Filter</Text>
          <View style={styles.rowBetween}>
            <Pressable onPress={closeModal}>
              <Text style={[styles.regular, {color: colors.black}]}>
                Cancel
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                if (props.type === 'restaurant') {
                  props.setFilters({
                    search: '',
                    sortBy: '',
                    rating: 0,
                  });
                } else {
                  props.setFilters({
                    search: '',
                    sortBy: '',
                    rating: 0,
                    priceRange: [200, 1000],
                  });
                }
                setRecentSearchInputValue('');
                setRecentSearches([]);
                setDropDownValue('');
                setCurrentRating(0);
                setPriceRange([200, 1000]);
                closeModal();
              }}>
              <Text style={[styles.regular, {color: colors.black}]}>Reset</Text>
            </Pressable>
          </View>
          <Text style={[styles.semiBold, {paddingTop: 20}]}>
            RECENT SEARCHES
          </Text>
          <View style={localStyles.recentSearchContainer}>
            {recentSearches &&
              recentSearches.map((item, index) => {
                return (
                  <Pressable
                    key={index}
                    style={localStyles.recentSearchTag}
                    onPress={() => {
                      setRecentSearches(
                        recentSearches.filter(value => value !== item),
                      );
                    }}>
                    <Text
                      style={[
                        styles.small,
                        {color: colors.orange, marginRight: 2},
                      ]}>
                      {item}
                    </Text>
                    <AntDesign name="close" size={10} color={colors.orange} />
                  </Pressable>
                );
              })}
            <TextInput
              value={recentSearchInputValue}
              onChange={(text: any) => setRecentSearchInputValue(text)}
              placeholder="Recent Searches..."
              style={[styles.regular, {flex: 1, color: colors.black}]}
              onSubmitEditing={event => {
                setRecentSearches([
                  ...recentSearches,
                  event.nativeEvent.text.trim(),
                ]);
                setRecentSearchInputValue('');
              }}
            />
          </View>
          <Text style={[styles.semiBold, {paddingTop: 20}]}>SORT BY</Text>
          <Dropdown
            style={localStyles.dropDown}
            placeholderStyle={styles.regular}
            selectedTextStyle={[styles.regular, {color: colors.black}]}
            data={
              props.type === 'restaurant' ? sortByDataRestaurant : sortByData
            }
            itemTextStyle={[styles.regular, {color: colors.black}]}
            maxHeight={300}
            labelField="label"
            valueField="label"
            placeholder={!isDropDownFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={dropDownValue}
            onFocus={() => setIsDropDownFocus(true)}
            onBlur={() => setIsDropDownFocus(false)}
            onChange={item => {
              setDropDownValue(item.label);
              setIsDropDownFocus(false);
            }}
          />
          <Text style={[styles.semiBold, {marginTop: 20}]}>RATING</Text>
          <View style={[styles.rowBetween, {marginTop: 20}]}>
            {ratings.map((item, index) => {
              return (
                <Pressable
                  key={index}
                  style={[
                    localStyles.filterRatingTag,
                    {
                      backgroundColor:
                        currentRating === item ? colors.orange : colors.white,
                    },
                  ]}
                  onPress={() => setCurrentRating(item)}>
                  <Text
                    style={[
                      styles.small,
                      {
                        color:
                          currentRating === item ? colors.white : colors.grey,
                      },
                    ]}>
                    {item !== 0 ? item : 'NONE'}{' '}
                    {item !== 0 && (
                      <AntDesign
                        name="star"
                        size={14}
                        color={
                          item === currentRating
                            ? colors.white
                            : colors.lightGrey
                        }
                      />
                    )}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          {props.type !== 'restaurant' && (
            <>
              <Text style={[styles.semiBold, {marginTop: 20}]}>
                PRICE RANGE
              </Text>
              <View style={{position: 'relative', marginTop: 20}}>
                <PriceRangeBackground />
                <Slider
                  animateTransitions
                  minimumValue={200}
                  maximumValue={1000}
                  step={100}
                  containerStyle={{
                    position: 'absolute',
                    bottom: -20,
                    left: 0,
                    right: 0,
                  }}
                  minimumTrackTintColor={colors.orange}
                  maximumTrackTintColor={colors.lightGrey}
                  thumbTintColor={colors.orange}
                  value={priceRange}
                  onValueChange={value => setPriceRange(value)}
                  renderAboveThumbComponent={index => (
                    <Text
                      style={[
                        styles.regular,
                        {marginBottom: 20, color: colors.black},
                      ]}>
                      {priceRange[index]}
                    </Text>
                  )}
                />
              </View>
              <View style={[styles.rowBetween, {marginTop: 20}]}>
                <Text style={[styles.regular, {color: colors.orange}]}>
                  ₹ 200
                </Text>
                <Text style={[styles.regular, {color: colors.orange}]}>
                  ₹ 1000
                </Text>
              </View>
            </>
          )}
          <StyledButton
            title="APPLY FILTERS"
            style={{
              backgroundColor: colors.orange,
              marginHorizontal: 0,
              height: 50,
              marginTop: 20,
            }}
            onPress={() => {
              if (props.type === 'restaurant') {
                props.setFilters({
                  search: recentSearches.join(' '),
                  sortBy: dropDownValue,
                  rating: currentRating,
                });
              } else {
                props.setFilters({
                  search: recentSearches.join(' '),
                  sortBy: dropDownValue,
                  rating: currentRating,
                  priceRange,
                });
              }
              closeModal();
            }}
          />
        </ScrollView>
      </BottomSheetModal>
    </View>
  );
}

const localStyles = StyleSheet.create({
  filterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginTop: 10,
  },
  modalContentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  recentSearchContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.lightGrey,
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 10,
    ...styles.boxShadow,
  },
  recentSearchTag: {
    flexDirection: 'row',
    backgroundColor: colors.lightOrange,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  dropDown: {
    height: 50,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.lightGrey,
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 10,
    ...styles.boxShadow,
  },
  filterRatingTag: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});
