import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import WeatherData from './WeatherData';

import { useTailwind } from 'tailwind-rn';
const Body = () => {
  const tailwind = useTailwind();
  const image = { uri: 'https://i.pinimg.com/564x/31/61/a4/3161a48a6fa0b8b1c97119ad0efdfc9a.jpg' };  
  return (
    <View style={tailwind('flex-1')}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <Text style={styles.text}>Weather-X</Text>
        <WeatherData />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  image: {
    flex: 1,
    
  },
  text: {
    color: 'gray',
    fontSize: 32,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontFamily: 'Akronim'
  },
});

export default Body;
