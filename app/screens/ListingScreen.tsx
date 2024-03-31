import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import useListings from '../hooks/useListings';
import { FeedStackParamList } from '../navigation/FeedNavigator';
import ActivityIndicator from '../components/ActivityIndicator';

type Props = StackScreenProps<FeedStackParamList, 'Listings'>;

const ListingsScreen = ({ navigation: { navigate } }: Props) => {
  const { listings, error, loading, reLoad } = useListings();

  return (
    <Screen style={styles.screen}>
      <ActivityIndicator visible={loading} />
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton onPress={reLoad}>Retry</AppButton>
        </>
      )}
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
