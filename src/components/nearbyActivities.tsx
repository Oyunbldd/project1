import React, {useCallback} from 'react';
import {NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import {Box, Text, FlatList, Image} from 'native-base';
const Nearby = gql`
  query {
    nearbyActivitiesCollection {
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
type NearbyAcitivityType = {
  title: string;
  rate: number;
  image: {
    url: string;
  };
};
type NearbyActivitiesType = {
  activityCollection: {
    items: AcitivityType[];
  };
};

const NearbyActivies = ({customWidth, customHeight}) => {
  const {data} = useQuery<NearbyActivitiesType>(Nearby);
  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);
    },
    [],
  );
  const renderData = data?.activityCollection.items;
  return (
    <Box
      width={customWidth}
      height={customHeight}
      borderWidth={3}
      borderColor={'black'}>
      <FlatList
        data={renderData}
        horizontal
        onScroll={onScroll}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Box display={'flex'} flexDirection={'column'}>
            <Image
              source={{uri: item.image.url}}
              width={customWidth}
              height={customHeight}
              alignSelf={'center'}
              alt="gg"
              borderColor={'white'}
              borderWidth={10}
            />
          </Box>
        )}
      />
    </Box>
  );
};
export default NearbyActivities;
