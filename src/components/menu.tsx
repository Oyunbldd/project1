import React from 'react';
import {Box, Text, Slide} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import First from '../../assets/svg/first.svg';
import Second from '../../assets/svg/second.svg';
import Third from '../../assets/svg/third.svg';
import {Dimensions, Pressable} from 'react-native';
const Menu = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box
      width={windowWidth * 0.9}
      height={windowHeight * 0.15}
      position={'absolute'}
      bottom={6}
      right={4}>
      <Box
        position={'absolute'}
        bottom={0}
        right={0}
        width={isOpen ? 0 : 60}
        zIndex={0}
        height={60}
        borderRadius={60}
        background={'black'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}>
        <Icon
          name="menu"
          size={30}
          color="white"
          onPress={() => setIsOpen(!isOpen)}
        />
      </Box>
      <Slide in={isOpen} placement={'right'}>
        <Box
          width={windowWidth * 0.9}
          height={windowHeight * 0.18}
          borderRadius={40}
          background={'black'}
          display={'flex'}
          flexDirection={'column'}
          padding={2}>
          <Box
            display={'flex'}
            flexDirection={'row'}
            width={windowWidth * 0.9}
            backgroundColor={'white'}
            height={windowHeight * 0.09}
            padding={1}>
            <Box display={'flex'} flexDirection={'column'}>
              <First />
              <Text>Discover</Text>
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
              <Second />
              <Text>Discover</Text>
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
              <Third />
              <Text>Discover</Text>
            </Box>
          </Box>
          <Box display={'flex'} flexDirection={'row'}></Box>
        </Box>
      </Slide>
    </Box>
  );
};
export default Menu;
