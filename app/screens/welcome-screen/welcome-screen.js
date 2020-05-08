import React from 'react';
import {View, Text, Image} from 'react-native';

const ROOT = {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const GIF = {
  width: 200,
  height: 200,
};

const TITLE = {
  fontSize: 46,
  marginBottom: 20,
};

export const WelcomeScreen = (props) => {
  return (
    <View style={ROOT}>
      <Text style={TITLE}>We're ready to roll!</Text>
      <Image
        style={GIF}
        source={{
          uri: 'https://media.giphy.com/media/l4Ep3mmmj7Bw3adWw/giphy.gif',
        }}
      />
    </View>
  );
};
