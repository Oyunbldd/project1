import React from 'react';
import {ImageBackground, Dimensions} from 'react-native';
import {Box, Text, FlatList, Image, Button} from 'native-base';
import CustomText from '../../components/text';
const Welcome2 = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const data = [
    {
      id: 0,
      imgUrl: 'https://static.toiimg.com/photo/81653900.cms',
      title: 'Germany',
    },
    {
      id: 1,
      imgUrl: 'https://cdn.hswstatic.com/gif/UK-Britain-1.jpg',
      title: 'England',
    },
    {
      id: 2,
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a9/Heart_of_paris.jpg',
      title: 'France',
    },
  ];
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({item}) => (
        <ImageBackground
          resizeMode="cover"
          blurRadius={2}
          source={{uri: item.imgUrl}}
          style={{
            width: windowWidth,
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Box marginTop={165}>
            {' '}
            <Image
              source={{uri: item.imgUrl}}
              width={334}
              height={380}
              alignSelf={'center'}
              alt="gg"
              borderColor={'white'}
              borderWidth={10}
              borderTopRadius={6}
            />
            <Box
              background={'white'}
              borderColor={'white'}
              borderWidth={1}
              flexDirection={'row'}
              justifyContent={'center'}
              borderBottomRadius={6}
              width={334}
              height={50}>
              <Text fontSize={20}>{item.title}</Text>
            </Box>
          </Box>
          <Button
            marginTop={10}
            width={334}
            height={70}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text fontSize={18} color={'white'}>
              EXPLORE THE CITY
            </Text>
          </Button>
          <CustomText text1={'Choose'} text2={'your city'} unique={false} />
        </ImageBackground>
      )}
    />
  );
};
export default Welcome2;
