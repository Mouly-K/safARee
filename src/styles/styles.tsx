import {StyleSheet} from 'react-native';

import {colors} from './colors';
import {fonts} from './fonts';
import {fontSizes} from './fontSizes';

import {generateBoxShadowStyle} from '../utils';

export const styles = StyleSheet.create({
  extraBold: {
    fontFamily: fonts.extraBold,
    color: colors.black,
    fontSize: fontSizes.extraBig,
  },
  bold: {
    fontFamily: fonts.bold,
    color: colors.black,
    fontSize: fontSizes.extraBig,
  },
  semiBold: {
    fontFamily: fonts.bold,
    color: colors.black,
    fontSize: fontSizes.big,
  },
  medium: {
    fontFamily: fonts.medium,
    color: colors.black,
    fontSize: fontSizes.regular,
  },
  regular: {
    fontFamily: fonts.regular,
    color: colors.grey,
    fontSize: fontSizes.regular,
  },
  small: {
    fontFamily: fonts.small,
    color: colors.grey,
    fontSize: fontSizes.small,
  },
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: colors.backgroundColor,
  },
  textInput: {
    backgroundColor: colors.backgroundColor,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 15,
    marginTop: 15,
    ...generateBoxShadowStyle(0, 8, 24, 1, colors.grey, 16),
  },
  boxShadow: {
    ...generateBoxShadowStyle(0, 8, 24, 1, colors.grey, 16),
  },
  card: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 20,
    borderRadius: 20,
  },
  rowBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  columnBetween: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
