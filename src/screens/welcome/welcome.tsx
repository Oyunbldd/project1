import React from 'react';
import {Button, Text} from 'native-base';
import {ImageBackground, Dimensions} from 'react-native';
import CustomText from '../../components/text';
const Welcome = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <ImageBackground
      source={require('../../photos/welcome.png')}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: windowWidth,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <CustomText unique={true} text1={'Hello'} text2={'Leonard'} />
      <Text />
      <Button
        marginBottom={20}
        width={334}
        height={70}
        background="black"
        fontSize={30}
        onPress={() => {
          navigation.navigate('Welcome1');
        }}>
        EXPLORE
      </Button>
    </ImageBackground>
  );
};

export default Welcome;
