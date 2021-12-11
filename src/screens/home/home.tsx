import React, {useState} from 'react';
import {Box, Image, Pressable, Text, FlatList} from 'native-base';
const Home = () => {
  const [click, setClicked] = useState('ALL');
  console.log(click);
  const data = ['ALL', 'MUSUEMS', 'HISTORICAL PLACE', 'RESTAURANTS'];
  return (
    <Box safeArea flex={1} flexDirection={'column'} padding={4}>
      <Text fontSize={18} marginTop={10}>
        Discover,
      </Text>
      <Text fontSize={30} fontWeight={'bold'} color={'black'}>
        Amsterdam!
      </Text>
      <FlatList
        marginTop={8}
        data={data}
        horizontal
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
                setClicked(item);
              }}>
              {item}
            </Text>
          </Box>
        )}
      />
      <Text>Top activities</Text>
      <Box>
        <FlatList/>
      </Box>
    </Box>
  );
};
export default Home;
