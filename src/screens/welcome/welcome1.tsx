import React, {useState, useCallback} from 'react';
import {
  ImageBackground,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {Box, Text, Image, FlatList,Pressable} from 'native-base';
import {BlurView} from '@react-native-community/blur';
import CustomText from '../../components/text';
const Welcome1 = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const [imageIndex, setImageIndex] = useState(0);
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
  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);
      setImageIndex(roundIndex);
    },
    [],
  );

  return (
    <ImageBackground
      resizeMode="cover"
      blurRadius={1}
      source={{uri: data[imageIndex].imgUrl}}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: windowWidth,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Box
        width={340}
        height={450}
        marginTop={200}
        borderColor={'white'}
        borderWidth={10}
        borderRadius={5}>
        <FlatList
          data={data}
          horizontal
          onScroll={onScroll}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Box display={'flex'} flexDirection={'column'}>
              <Image
                source={{uri: item.imgUrl}}
                width={334}
                height={380}
                alignSelf={'center'}
                alt="gg"
                borderColor={'white'}
                borderWidth={10}
              />
              <Box
                background={'white'}
                flexDirection={'row'}
                justifyContent={'center'}
                width={334}
                height={50}>
                <Text fontSize={20}>{item.title}</Text>
              </Box>
            </Box>
          )}
        />
      </Box>
      <Box
        backgroundColor="white"
        width={100}
        height={8}
        mt={-4}
        borderRadius={10}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-evenly">
        {data.map(index => (
          <Box
            key={index}
            width={index == imageIndex ? 8 : 2}
            backgroundColor={index == imageIndex ? 'green.400' : 'gray.500'}
            borderRadius={100}
            height={2}
          />
        ))}
      </Box>
      <Pressable
        style={{marginTop: 10}}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <BlurView
          blurAmount={10}
          blurType="light"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3,
            width: 340,
            height: 70,
          }}>
          <Text color="white" fontSize={15} fontWeight="bold">
            EXPLORE THE CITY
          </Text>
        </BlurView>
      </Pressable>
      {/* <Box width={340} height={70} background={'white'}>
        <Text
          onPress={() => {
            navigation.navigate('Home');
          }}>
          Blurview doesn't work
        </Text>
      </Box> */}

      <CustomText
        text1={'Choose'}
        text2={'your country'}
        unique={false}
        textunique={false}
      />
    </ImageBackground>
  );
};
export default Welcome1;
