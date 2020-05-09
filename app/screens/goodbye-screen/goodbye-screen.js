import React from 'react';
import {View, Text, Button} from 'react-native';

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

export const GoodbyeScreen = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={ROOT}>
      <Text style={TITLE}>Good bye 👋</Text>
      <Button title="Go Back 😊" onPress={goBack} />
    </View>
  );
};
