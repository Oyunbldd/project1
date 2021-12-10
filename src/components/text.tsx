import React from 'react';
import {Box, Text} from 'native-base';
const CustomText = ({text1, text2, unique}) => {
  return (
    <Box
      position={'absolute'}
      marginTop={5}
      alignSelf="flex-start"
      width="350"
      height="170">
      <Box borderColor="gray.300" borderBottomWidth={1} padding={3}>
        <Text color="orange.400" fontSize="15" fontWeight="bold">
          LET'S GO!
        </Text>
      </Box>
      <Box padding="3">
        <Text
          fontSize="30"
          color={unique ? '#72978F' : 'black'}
          letterSpacing={1}>
          {text1}
        </Text>
        <Text fontSize="30" letterSpacing={1} color={'black'}>
          {text2}
        </Text>
      </Box>
    </Box>
  );
};
export default CustomText;
