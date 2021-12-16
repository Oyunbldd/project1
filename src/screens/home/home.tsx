import React, {useState,useMemo} from 'react';
import {Box, Text, FlatList} from 'native-base';
import {useQuery, gql} from '@apollo/client';
import HomeCarousel from '../../components/homeCarousel';
const CATEGORIES = gql`
  query {
    categoryCollection {
      items {
        name
      }
    }
  }
`;
type CategoryType = {
  name: string;
};
type CategoriesType = {
  categoryCollection: {
    items: CategoryType[];
  };
};
const Home = () => {
  const [click, setClicked] = useState('All');
  const {data} = useQuery<CategoriesType>(CATEGORIES);
  const renderData = useMemo(() => {
    return data ? [{name: 'All'}, ...data.categoryCollection.items] : [];
  }, [data]);
  return (
    <Box safeArea flex={1} flexDirection={'column'} padding={4}>
      <Text fontSize={18} marginTop={10}>
        Discover,
      </Text>
      <Text fontSize={30} fontWeight={'bold'} color={'black'}>
        Amsterdam!
      </Text>
      <FlatList
        marginTop={4}
        data={renderData}
      
        horizontal
        borderColor={'black'}
        borderWidth={3}
        maxHeight={50}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <Box
            borderWidth={2}
            borderColor={'#D5E5E2'}
            borderRadius={100}
            marginRight={2}
            height={10}
            minWidth={60}
            flexDirection={'row'}
            justifyContent={'center'}
            backgroundColor={'#D5E5E2'}
            padding={1}>
            <Text
              color={'#5B7D76'}
              onPress={() => {
                setClicked(item.name);
              }}>
              {item.name}
            </Text>
          </Box>
        )}
      />
      <Text mt={4} mb={4} fontSize={20} color="gray.500">
        Top activities
      </Text>
      <HomeCarousel customWidth={355} customHeight={215} category={click} />
    </Box>
  );
};
export default Home;
