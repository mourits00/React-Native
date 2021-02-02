import React from 'react';
import {Text, View, Image} from 'react-native';

const App = () => {
  return (
      <View>
          <MyFam />
          <Text>Daniel Mourits Du Puy</Text>
          <Text>Grace Illona Elseline Du Puy</Text>
          <Text>Sophie Katherine Danielle Du Puy</Text>
          <Text>Samara Amoreiza Danielle Du Puy</Text>
          <Gambar />
      </View>
  );
};

  const MyFam = () => {
    return <Text>My Little Family Are :</Text>
  };

  const Gambar = () => {
    return <Image source={{uri : 'https://placeimg.com/100/100/people'}} style={{width : 100, height : 100}}/>
  }

export default App;
