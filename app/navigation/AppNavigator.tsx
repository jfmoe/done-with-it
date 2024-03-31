import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator, { FeedStackParamList } from './FeedNavigator';
import { NavigatorScreenParams } from '@react-navigation/native';

export type BottomTabParamsList = {
  Feed: NavigatorScreenParams<FeedStackParamList>;
  ListingEdit: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamsList>();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Feed" component={FeedNavigator} />
      <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
