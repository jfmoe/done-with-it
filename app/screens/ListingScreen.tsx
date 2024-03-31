import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { FlatList, ImageSourcePropType, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { FeedStackParamList } from '../navigation/FeedNavigator';

export interface ListItem {
  id: number;
  title: string;
  price: number;
  image: ImageSourcePropType;
}

const listings: ListItem[] = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/couch.jpg'),
  },
];

type Props = StackScreenProps<FeedStackParamList, 'Listings'>;

const ListingsScreen = ({ navigation: { navigate } }: Props) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
            onPress={() => navigate('ListingDetails', item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
