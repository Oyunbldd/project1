import React from 'react';
import {Box, Button, Text} from 'native-base';
import {
  ImageBackground,
  Dimensions,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
const Welcome = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <Box style={{flex: 1}}>
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
        <Box
          marginTop="10"
          // borderColor="black"
          // borderWidth="4"
          alignSelf="flex-start"
          width="350"
          height="170">
          <Box borderColor="gray.300" borderBottomWidth={1} padding={3}>
            <Text color="orange.400" fontSize="15" fontWeight="bold">
              LET'S GO!
            </Text>
          </Box>
          <Box padding="3">
            <Text fontSize="30" color="#72978F" letterSpacing={1}>
              HELLO,
            </Text>
            <Text fontSize="30" letterSpacing={1}>
              Leonard!
            </Text>
          </Box>
        </Box>
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
    </Box>
  );
};

export default Welcome;
