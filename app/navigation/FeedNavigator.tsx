import { createStackNavigator } from '@react-navigation/stack';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingsScreen from '../screens/ListingScreen';
import { ListItem } from '../api/listings';

export type FeedStackParamList = {
  Listings: undefined;
  ListingDetails: ListItem;
};

const Stack = createStackNavigator<FeedStackParamList>();

const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
