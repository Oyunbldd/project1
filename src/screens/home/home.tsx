import React, {useState} from 'react';
import {Box, Image, Pressable, Text, FlatList} from 'native-base';
const Home = () => {
  const [click, setClicked] = useState(null);
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
            borderWidth={3}
            borderColor={'white'}
            borderRadius={100}
            marginRight={2}
            height={10}
            minWidth={60}
            flexDirection={'row'}
            justifyContent={'center'}
            backgroundColor={'green.300'}
            padding={1}>
            <Text
              onPress={() => {
                setClicked(item);
              }}>
              {item}
            </Text>
          </Box>
        )}
      />
    </Box>
  );
};
export default Home;
