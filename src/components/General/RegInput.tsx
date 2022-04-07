import React, {useState} from 'react';
import {View, TextInput, Text, Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {colors} from '../../styles/colors';
import {styles} from '../../styles/styles';

const RegInput = (props: any) => {
  const [valid, setValid] = useState(false);
  const [visible, setVisible] = useState(false);

  const checkValidity = (value: string) => {
    if (props.validateWith(value)) {
      setValid(true);
      props.setIsValid(true);
    } else {
      setValid(false);
      props.setIsValid(false);
    }
  };

  return (
    <View style={[{marginTop: 20}, props.containerStyle]}>
      {props.noTitle ? null : (
        <Text style={[styles.medium, {color: colors.darkGrey}]}>
          {props.title}
        </Text>
      )}
      <View
        style={[
          styles.textInput,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: props.type === 'valid' && valid ? 0 : 1,
            borderColor: props.type === 'valid' && valid ? '' : colors.red,
          },
        ]}>
        <TextInput
          maxLength={props.maxLength || 100}
          style={[styles.medium, props.textInputStyle, {width: '80%'}]}
          placeholder={props.placeholder || props.title}
          placeholderTextColor={colors.grey}
          value={props.value}
          onChangeText={value => {
            if (props.keyboardType === 'numeric') {
              props.onChange(value.replace(/[^0-9]/g, ''));
            } else if (props.keyboardType === 'ascii-capable') {
              props.onChange(value.replace(/[^a-z ]/gi, ''));
            } else {
              props.onChange(value);
            }
            if (props.type === 'valid') {
              checkValidity(value);
            }
          }}
          keyboardType={props.keyboardType}
          dataDetectorTypes={props.dataDetectorTypes}
          textContentType={props.textContentType}
          autoCorrect={props.autoCorrect}
          secureTextEntry={
            props.secureTextEntry ? (visible ? false : true) : false
          }
        />
        <View style={{flexDirection: 'row'}}>
          {props.secureTextEntry ? (
            <Pressable
              onPress={() => setVisible(state => !state)}
              style={{marginRight: 10}}>
              <Feather
                name="eye"
                size={18}
                color={visible ? colors.orange : colors.grey}
              />
            </Pressable>
          ) : null}
          {props.type === 'valid' ? (
            valid ? (
              <Feather name="check-circle" size={18} color={colors.orange} />
            ) : (
              <Feather name="x-circle" size={18} color={colors.red} />
            )
          ) : null}
        </View>
      </View>
      {props.type === 'valid' && props.errorText && !valid ? (
        <Text style={[styles.regular, {color: colors.red, marginTop: 5}]}>
          {props.errorText}
        </Text>
      ) : null}
    </View>
  );
};

export default RegInput;
