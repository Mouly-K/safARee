import React from 'react';
import {View, Image, StyleSheet, Text, Pressable} from 'react-native';

import {styles} from '../../styles/styles';
import {colors} from '../../styles/colors';

export default function ({images, openCollageView}: any) {
  // Assume images is an array of image sources
  // Check if images is empty
  if (images.length === 0) {
    return null;
  }
  // Check if images has only one element
  if (images.length === 1) {
    return (
      <Pressable
        style={{width: '100%', height: '100%', borderRadius: 10}}
        onPress={() => openCollageView(0)}>
        <Image
          source={images[0]}
          style={{width: '100%', height: '100%', borderRadius: 10}}
          resizeMode="cover"
        />
      </Pressable>
    );
  }
  // Check if images has only two elements
  if (images.length === 2) {
    return (
      <View style={{flexDirection: 'row'}}>
        <Pressable
          style={{
            width: '48%',
            height: '100%',
            borderRadius: 10,
            marginRight: 7.5,
          }}
          onPress={() => openCollageView(0)}>
          <Image
            source={images[0]}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
        </Pressable>
        <Pressable
          style={{
            width: '48%',
            height: '100%',
            borderRadius: 10,
            marginLeft: 7.5,
          }}
          onPress={() => openCollageView(1)}>
          <Image
            source={images[1]}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
        </Pressable>
      </View>
    );
  }
  // Get the first four elements of images
  const [first, second, third, fourth, fifth] = images.slice(0, 5);
  return (
    <View style={{flexDirection: 'row'}}>
      <Pressable
        style={{
          width: '48%',
          height: '100%',
          borderRadius: 10,
          marginRight: 7.5,
        }}
        onPress={() => openCollageView(0)}>
        <Image
          source={first}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 10,
          }}
          resizeMode="cover"
        />
      </Pressable>
      <View style={{width: '48%', height: '100%'}}>
        <View style={{flexDirection: 'row', height: '50%'}}>
          <Pressable
            style={{
              width: '48%',
              height: '100%',
              borderRadius: 10,
              marginRight: 3.75,
              marginBottom: 5.625,
            }}
            onPress={() => openCollageView(1)}>
            <Image
              source={second}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
              }}
              resizeMode="cover"
            />
          </Pressable>
          {third && (
            <Pressable
              style={{
                width: '48%',
                height: '100%',
                borderRadius: 10,
                marginLeft: 3.75,
                marginBottom: 5.625,
              }}
              onPress={() => openCollageView(2)}>
              <Image
                source={third}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 10,
                }}
                resizeMode="cover"
              />
            </Pressable>
          )}
        </View>
        {fourth && (
          <View style={{flexDirection: 'row', height: '50%'}}>
            <Pressable
              style={{
                width: '48%',
                height: '100%',
                borderRadius: 10,
                marginRight: 3.75,
                marginTop: 5.625,
              }}
              onPress={() => openCollageView(3)}>
              <Image
                source={fourth}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 10,
                }}
                resizeMode="cover"
              />
            </Pressable>
            {fifth && (
              <Pressable
                style={{
                  width: '48%',
                  height: '100%',
                  borderRadius: 10,
                  marginLeft: 3.75,
                  marginTop: 5.625,
                  position: 'relative',
                }}
                onPress={() => openCollageView(4)}>
                <Image
                  source={fifth}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                  resizeMode="cover"
                />
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundColor: 'rgba(255, 162, 107, 0.8)',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    padding: 10,
                  }}>
                  {images.length > 5 && (
                    <>
                      <Text style={[styles.regular, {color: colors.white}]}>
                        +{images.length - 4}
                      </Text>
                      <Text style={[styles.regular, {color: colors.white}]}>
                        PHOTOS
                      </Text>
                    </>
                  )}
                </View>
              </Pressable>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  // smallImage: ,
});
