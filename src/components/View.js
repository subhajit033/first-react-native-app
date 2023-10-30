import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
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

  return !myName ? (
    <Text style={styles.container}>Loading....</Text>
  ) : (
    <View style={styles.container}>
      <Pressable style={tailwind('bg-green-400 p-2 rounded-md')} onPress={getUsers}>
        <Text style={tailwind('text-gray-200')}>Click Me</Text>
      </Pressable>
      <Text style={tailwind('text-red-800 text-2xl')}>
        Hi this is {myName.name}
      </Text>
      <Image
        source={{
          uri: myName.url,
        }}
        style={tailwind('w-40 h-40 rounded-full my-4')}
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
