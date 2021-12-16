import React, {useCallback, useState} from 'react';
import {NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import {Box, Text, FlatList, Image} from 'native-base';

const HomeCarousel = ({customWidth, customHeight, category}) => {
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
    activityCollection{
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
    <Box width={customWidth} height={customHeight}>
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
              width={customWidth}
              height={customHeight}
              alignSelf={'center'}
              alt="gg"
              borderRadius={10}
            />
            <Box width={customWidth - 29} bottom={110} ml={3}>
              <Text
                position={'absolute'}
                color={'white'}
                fontWeight={'bold'}
                fontSize={30}>
                {item.title}
              </Text>
            </Box>
          </Box>
        )}
      />
    </Box>
  );
};
export default HomeCarousel;
