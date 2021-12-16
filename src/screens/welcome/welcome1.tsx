import React, {useState, useCallback} from 'react';
import {
  ImageBackground,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StyleSheet,
} from 'react-native';
import {Box, Text, Image, FlatList, Pressable} from 'native-base';
import {BlurView} from '@react-native-community/blur';
import CustomText from '../../components/text';
import Search from '../../components/search';
const Welcome1 = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [imageIndex, setImageIndex] = useState(0);
  console.log(windowHeight);
  console.log(windowWidth);
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
      <Search />
      <Box
        width={windowWidth * 0.9}
        height={windowHeight * 0.55}
        marginTop={200}
        borderColor={'white'}
        borderWidth={15}
        borderRadius={5}>
        <FlatList
          data={data}
          horizontal
          onScroll={onScroll}
          pagingEnabled
          keyExtractor={item => item.title}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent={'center'}
              height={windowHeight * 0.46}
              width={windowWidth * 0.82}>
              <Image
                source={{uri: item.imgUrl}}
                width={windowWidth * 0.9 - 10}
                height={windowHeight * 0.48}
                alt="gg"
              />
              <Box
                background={'white'}
                flexDirection={'row'}
                justifyContent={'center'}
                width={340}
                height={50}>
                <Text fontSize={25} letterSpacing={2} fontWeight={'bold'}>
                  {item.title}
                </Text>
              </Box>
            </Box>
          )}
        />
      </Box>
      <Box
        backgroundColor="white"
        width={100}
        height={8}
        mt={-5}
        borderRadius={10}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-evenly">
        {data.map((dt, index) => (
          <Box
            key={index}
            style={[
              styles.indicator,
              {
                width: index == imageIndex ? 25 : 6,
                borderRadius: 3,
                opacity: 1 - (1 / data.length) * Math.abs(imageIndex - index),
              },
            ]}
          />
        ))}
      </Box>
      {/* <Pressable
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
      </Pressable> */}

      <Text
        mt={4}
        fontSize={20}
        color={'black'}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        Blurview doesn't work
      </Text>

      <CustomText
        text1={'Choose'}
        text2={'your country'}
        unique={false}
        textunique={false}
      />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  indicator: {
    width: 6,
    height: 6,
    backgroundColor: 'green',
    borderRadius: 3,
  },
});
export default Welcome1;
