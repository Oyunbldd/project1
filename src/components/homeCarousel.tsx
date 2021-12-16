import React, {useCallback, useState} from 'react';
import {
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import {Box, Text, FlatList, Image} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeCarousel = ({customWidth, customHeight, category}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [imageIndex, setImageIndex] = useState(0);
  const ACTIVITY = gql`
    query {
      activityCollection(where:{category:{name:"${category}"}}) {
        items {
          title
          rate
          image {
            url
          }
        }
      }
    }
  `;
  const ALLACTIVITY = gql`
    query {
      activityCollection {
        items {
          title
          rate
          image {
            url
          }
        }
      }
    }
  `;
  type AcitivityType = {
    title: string;
    rate: number;
    image: {
      url: string;
    };
  };
  type ActivitiesType = {
    activityCollection: {
      items: AcitivityType[];
    };
  };
  const {data} = useQuery<ActivitiesType>(
    category == 'All' ? ALLACTIVITY : ACTIVITY,
  );
  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);
      setImageIndex(roundIndex);
    },
    [],
  );
  const renderData = data?.activityCollection.items;
  return (
    <Box width={windowWidth * 0.93} height={customHeight}>
      <FlatList
        data={renderData}
        horizontal
        pagingEnabled
        onScroll={onScroll}
        keyExtractor={item => item.title}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Box>
            <Image
              source={{uri: item.image.url}}
              width={windowWidth * 0.93}
              height={customHeight}
              alignSelf={'center'}
              alt="gg"
              borderRadius={10}
            />
            <Box
              position={'absolute'}
              top={2}
              left={2}
              borderRadius={100}
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              alignItems={'center'}
              width={90}
              height={25}
              backgroundColor={'#FFF0D8'}>
              <Icon name="festival" size={20} color={'#D27C4A'} />
              <Text color={'#D27C4A'} ml={1} letterSpacing={1} fontSize={10}>
                Central
              </Text>
            </Box>
            <Box
              position={'absolute'}
              backgroundColor={'gray.200'}
              top={2}
              right={2}
              borderRadius={100}
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-evenly'}
              alignItems={'center'}
              width={70}
              height={25}>
              <Icon name="star" size={20} color={'white'} />
              <Text color={'white'} ml={1} letterSpacing={1}>
                {item.rate}
              </Text>
            </Box>
            <Box
              position={'absolute'}
              backgroundColor={'black'}
              top={39}
              right={2}
              borderRadius={10}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              width={70}
              height={59}>
              <Icon name="schedule" size={15} color={'white'} />
              <Text color={'white'} ml={1} letterSpacing={1} fontSize={8}>
                Closet
              </Text>
              <Text color={'white'} ml={1} fontSize={8} letterSpacing={1}>
                7.35pm
              </Text>
            </Box>
            <Box
              width={windowWidth * 0.8 - 29}
              position={'absolute'}
              bottom={7}
              ml={3}>
              <Text
                color={'white'}
                fontWeight={'bold'}
                fontSize={windowWidth * 0.07}>
                {item.title}
              </Text>
            </Box>
            <Box
              position={'absolute'}
              width={100}
              height={8}
              bottom={0}
              borderRadius={10}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-evenly">
              {renderData.map((dt, index) => (
                <Box
                  key={index}
                  style={[
                    styles.indicator,
                    {
                      width: index == imageIndex ? 25 : 6,
                      borderRadius: 3,
                      opacity:
                        1 -
                        (1 / renderData.length) * Math.abs(imageIndex - index),
                    },
                  ]}
                />
              ))}
            </Box>
          </Box>
        )}
      />
    </Box>
  );
};
const styles = StyleSheet.create({
  indicator: {
    width: 6,
    height: 6,
    backgroundColor: 'white',
    borderRadius: 3,
  },
});
export default HomeCarousel;
