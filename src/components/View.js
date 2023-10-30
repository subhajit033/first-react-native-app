import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useTailwind } from 'tailwind-rn';
const UserView = () => {
  const tailwind = useTailwind();
  const [myName, setMyname] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const { title, first, last } = data?.results[0]?.name;
    setMyname({
      name: `${title} ${first} ${last}`,
      url: data?.results[0]?.picture?.large,
    });
  };
  const users = [
    {
      name: 'Subhajit',
      url: 'https://avatars.githubusercontent.com/u/112102927?v=4',
    },
    {
      name: 'Sourav',
      url: 'https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?pid=ImgDet&rs=1',
    },
    {
      name: 'Bubai',
      url: 'https://images3.alphacoders.com/165/thumb-1920-165265.jpg',
    },
    {
      name: 'Tubai',
      url: 'https://th.bing.com/th/id/OIP.zeNPNbcmNiwHlHBapcLdBAHaE7?pid=ImgDet&rs=1',
    },
    {
      name: 'Bibek',
      url: 'https://th.bing.com/th/id/OIP.oYqMOEf80ebDR5N4NSL_rQHaEo?pid=ImgDet&w=474&h=296&rs=1',
    },
  ];

  return !myName ? (
    <Text>Loading....</Text>
  ) : (
    <View style={styles.container}>
      <Button title='click me' onPress={() => getUsers()} />
      <Text style={tailwind('text-red-800')}>Hi this is {myName.name}</Text>
      <Image
        source={{
          uri: myName.url,
        }}
        style={{ width: 300, height: 200 }}
      />
      <StatusBar style='auto' />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserView;
