import React from 'react';
import {Box, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Search = ({color}) => {
  return (
    <Box
      position={'absolute'}
      right={25}
      top={42}
      width={9}
      height={9}
      borderRadius={120}
      background={!color ? 'white' : `${color}`}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}>
      <Icon name="search" size={20} color="black" />
    </Box>
  );
};
export default Search;
