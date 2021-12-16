import React from 'react';
import {Text} from 'native-base';
import {ImageBackground, Dimensions} from 'react-native';
import CustomText from '../../components/text';
import CustomButton from '../../components/customButton';
const Welcome = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
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
      <CustomText
        textunique={true}
        unique={true}
        text1={'Hello,'}
        text2={'Leonard!'}
      />
      <Text />
      <CustomButton
        text={'EXPLORE'}
        navigation={navigation}
        navigateText={'Welcome1'}
      />
    </ImageBackground>
  );
};

export default Welcome;
