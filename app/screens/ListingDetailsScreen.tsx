import { View, Image, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import { FeedStackParamList } from '../navigation/FeedNavigator';

type Props = StackScreenProps<FeedStackParamList, 'ListingDetails'>;

function ListingDetailsScreen({ navigation, route: { params } }: Props) {
  return (
    <View>
      <Image style={styles.image} source={params.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{params.title}</AppText>
        <AppText style={styles.price}>{'$' + params.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
