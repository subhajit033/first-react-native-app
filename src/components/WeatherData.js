import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, Button } from 'react-native';
import { useTailwind } from 'tailwind-rn';

const WeatherData = () => {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const tailwind = useTailwind();
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9dc79ea5c8mshe313fe98b1ebd74p13ae7ejsne5f253de8390',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
    },
  };
  //   useEffect(()=>{
  //     setCityName('Kolkata')
  //   }, [])

  const getApidata = async () => {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    setWeatherData(data?.temp);
  };

  const getData = () => {
    getApidata();
  };

  return (
    <View style={tailwind('flex items-center mt-12')}>
      <SafeAreaView style={tailwind('mb-8 flex flex-row items-center')}>
        <TextInput
          style={tailwind(
            'w-56 h-12 border-2 border-blue-200 text-lg  text-blue-200 px-4 rounded-lg mr-4'
          )}
          placeholder='Your city name here'
          onChangeText={setCityName}
          value={cityName}
        ></TextInput>
        <Button title='click here' onPress={getData}></Button>
      </SafeAreaView>
      <Text style={tailwind('text-4xl text-gray-200 font-bold')}>
        {cityName.toUpperCase()}
      </Text>
      <Text style={tailwind('text-lg text-gray-200 font-bold my-6')}>
        Sunday, 10 August, 2023
      </Text>
      <Text style={tailwind('text-4xl text-green-200')}>
        {weatherData} degree
      </Text>
      <Text style={tailwind('text-lg text-gray-200 font-bold')}>
        - - - - - - - - - - - - - - - - - - -
      </Text>
      <Text style={tailwind('text-lg text-gray-200 font-bold mt-4')}>
        Cloudy
      </Text>
    </View>
  );
};

export default WeatherData;
