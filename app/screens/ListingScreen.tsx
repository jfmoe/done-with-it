import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { FeedStackParamList } from '../navigation/FeedNavigator';
import useListings from '../hooks/useListings';

type Props = StackScreenProps<FeedStackParamList, 'Listings'>;

const ListingsScreen = ({ navigation: { navigate } }: Props) => {
  const { listings } = useListings();

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
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
