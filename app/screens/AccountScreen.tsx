import { FlatList, StyleSheet, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon, { MaterialIconsName } from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import { AccountStackParamList } from '../navigation/AccountNavigator';

type Menu = {
  title: string;
  icon: {
    name: MaterialIconsName;
    backgroundColor: string;
  };
  targetScreen: keyof AccountStackParamList;
};

type Props = StackScreenProps<AccountStackParamList, 'Account'>;

const menuItems: Menu[] = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
    targetScreen: 'Messages',
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: 'Messages',
  },
];

const AccountScreen = ({ navigation: { navigate } }: Props) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem title="Mosh" subTitle="xxx@gmail.com" image={require('../assets/mosh.jpg')} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
              }
              onPress={() => navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem title="Log Out" IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
