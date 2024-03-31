import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountNavigator, { AccountStackParamList } from './AccountNavigator';
import FeedNavigator, { FeedStackParamList } from './FeedNavigator';

export type BottomTabParamsList = {
  Feed: NavigatorScreenParams<FeedStackParamList>;
  ListingEdit: undefined;
  Me: NavigatorScreenParams<AccountStackParamList>;
};

const Tab = createBottomTabNavigator<BottomTabParamsList>();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Feed" component={FeedNavigator} />
      <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
      <Tab.Screen name="Me" component={AccountNavigator} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
