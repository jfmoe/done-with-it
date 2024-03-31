import { createStackNavigator } from '@react-navigation/stack';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingsScreen, { ListItem } from '../screens/ListingScreen';

export type FeedStackParamList = {
  Listings: undefined;
  ListingDetails: ListItem;
};

const Stack = createStackNavigator<FeedStackParamList>();

const FeedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
