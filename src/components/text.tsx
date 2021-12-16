import React from 'react';
import {Dimensions} from 'react-native';
import {Box, Text} from 'native-base';
const CustomText = ({text1, text2, unique, textunique}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <Box
      position={'absolute'}
      alignSelf="flex-start"
      width={windowWidth * 0.8}
      // borderWidth={3}
      // borderColor={'black'}
      height={windowHeight * 0.23}
      padding={2}>
      <Box borderColor="gray.300" borderBottomWidth={1} padding={3}>
        <Text color="orange.400" fontSize="15" fontWeight="bold">
          LET'S GO!
        </Text>
      </Box>
      <Box mt={4}>
        <Text
          fontSize={windowHeight / 20}
          lineHeight={windowHeight / 20}
          color={unique ? '#72978F' : 'black'}
          fontFamily={'PlayfairDisplay-Regular'}
          letterSpacing={1}>
          {text1}
        </Text>
        <Text
          fontSize={textunique ? windowHeight / 15 : windowHeight / 20}
          lineHeight={windowHeight / 15}
          letterSpacing={1}
          color={'black'}
          fontFamily={'PlayfairDisplay-Regular'}>
          {text2}
        </Text>
      </Box>
    </Box>
  );
};
export default CustomText;
