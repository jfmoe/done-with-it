import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountNavigator, { AccountStackParamList } from './AccountNavigator';
import FeedNavigator, { FeedStackParamList } from './FeedNavigator';
import NewListingButton from './NewListingButton';

export type BottomTabParamsList = {
  Feed: NavigatorScreenParams<FeedStackParamList>;
  ListingEdit: undefined;
  Me: NavigatorScreenParams<AccountStackParamList>;
};

const Tab = createBottomTabNavigator<BottomTabParamsList>();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation: { navigate } }) => ({
          tabBarButton: () => <NewListingButton onPress={() => navigate('ListingEdit')} />,
        })}
      />
      <Tab.Screen
        name="Me"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
