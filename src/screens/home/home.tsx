import React, {useState, useMemo} from 'react';
import {Box, Text, FlatList} from 'native-base';
import {Dimensions} from 'react-native';
import Search from '../../components/search';
import Menu from '../../components/menu';
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
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [click, setClicked] = useState('All');
  const {data} = useQuery<CategoriesType>(CATEGORIES);

  const renderData = useMemo(() => {
    return data ? [{name: 'All'}, ...data.categoryCollection.items] : [];
  }, [data]);
  return (
    <Box
      safeArea
      flex={1}
      flexDirection={'column'}
      alignItems={'center'}
      padding={4}
      backgroundColor={'white'}>
      <Text
        fontSize={windowWidth * 0.06}
        lineHeight={windowWidth * 0.06}
        marginTop={5}
        alignSelf={'flex-start'}
        fontFamily={'PlayfairDisplay-Regular'}
        color={'black'}>
        Discover,
      </Text>
      <Text
        fontSize={windowWidth * 0.08}
        lineHeight={windowWidth * 0.1}
        alignSelf={'flex-start'}
        color={'black'}
        fontFamily={'PlayfairDisplay-Regular'}>
        Amsterdam!
      </Text>
      <Search color={'gray.200'} />
      <FlatList
        marginTop={5}
        data={renderData}
        horizontal
        maxHeight={50}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.name}
        renderItem={({item}) =>
          click === item.name ? (
            <Box
              borderWidth={2}
              borderColor={'#D5E5E2'}
              borderRadius={100}
              marginRight={4}
              height={10}
              minWidth={60}
              flexDirection={'row'}
              justifyContent={'center'}
              backgroundColor={'#D5E5E2'}
              padding={1}>
              <Text
                color={'#5B7D76'}
                fontSize={12}
                fontWeight={'bold'}
                onPress={() => {
                  setClicked(item.name);
                }}>
                {item.name}
              </Text>
            </Box>
          ) : (
            <Box
              marginRight={4}
              height={10}
              minWidth={60}
              borderWidth={2}
              borderColor={'white'}
              borderRadius={100}
              flexDirection={'row'}
              justifyContent={'center'}
              padding={1}>
              <Text
                color={'gray.400'}
                fontSize={12}
                onPress={() => {
                  setClicked(item.name);
                }}>
                {item.name}
              </Text>
            </Box>
          )
        }
      />
      <Text
        mt={1}
        mb={4}
        fontSize={15}
        lineHeight={17}
        color="gray.500"
        alignSelf={'flex-start'}>
        Top activities
      </Text>
      <HomeCarousel customWidth={370} customHeight={215} category={click} />
      <Text
        mt={3}
        mb={4}
        fontSize={15}
        lineHeight={17}
        color="gray.500"
        alignSelf={'flex-start'}>
        Nearby activities
      </Text>
      <Menu />
    </Box>
  );
};
export default Home;
