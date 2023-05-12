import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  StatusBar,
} from 'react-native';

import StyledButton from '../../components/General/StyledButton';

import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';
import {onboardingSlides} from '../../data/data';

import Carousel from '../../components/General/Carousel';

const OnboardingItem = (props: any) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[localStyles.container, {width}]}>
      <View style={[localStyles.image]}>
        <props.item.image />
      </View>
      <View style={{flex: 0.3}}>
        <Text style={localStyles.title}>{props.item.title}</Text>
        <Text style={localStyles.description}>{props.item.description}</Text>
      </View>
    </View>
  );
};

function Onboarding(props: any) {
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <View style={localStyles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <View style={{flex: 4}}>
        {onboardingSlides && (
          <Carousel
            data={onboardingSlides}
            currentIndex={carouselIndex}
            setCurrentIndex={setCarouselIndex}
            renderItem={({item}: any) => <OnboardingItem item={item} />}
            showPagination
          />
        )}
      </View>
      <View
        style={{
          display: 'flex',
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
          paddingBottom: 20,
          paddingHorizontal: 30,
        }}>
        <StyledButton
          title={
            carouselIndex === onboardingSlides?.length - 1
              ? 'GET STARTED'
              : 'NEXT'
          }
          style={{
            backgroundColor: colors.orange,
            marginHorizontal: 0,
            height: 50,
            marginBottom: 10,
          }}
          onPress={() => {
            if (carouselIndex < onboardingSlides?.length - 1) {
              setCarouselIndex(carouselIndex + 1);
            } else {
              props.navigation.navigate('Landing');
            }
          }}
        />
        {carouselIndex !== onboardingSlides?.length - 1 && (
          <StyledButton
            title="SKIP"
            style={{
              backgroundColor: colors.white,
              marginHorizontal: 0,
              height: 50,
              borderColor: colors.orange,
            }}
            textStyle={{color: colors.orange}}
            onPress={() => props.navigation.navigate('Landing')}
          />
        )}
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.extraBold,
    fontSize: 28,
    marginBottom: 10,
    color: colors.darkGrey,
    textAlign: 'center',
  },
  description: {
    fontFamily: fonts.regular,
    color: colors.grey,
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});

export default Onboarding;
