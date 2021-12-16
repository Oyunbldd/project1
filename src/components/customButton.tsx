import React from 'react';
import {Box, Text} from 'native-base';
import {ImageBackground, Dimensions} from 'react-native';
const CustomButton = ({text, navigation, navigateText}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <ImageBackground
      source={require('../photos/customButton.png')}
      style={{
        width: windowWidth * 0.9,
        height: 70,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
      }}>
      <Text
        color={'white'}
        fontSize={18}
        letterSpacing={2}
        onPress={() => {
          navigation.navigate(`${navigateText}`);
        }}>
        {text}
      </Text>
    </ImageBackground>
  );
};
export default CustomButton;
