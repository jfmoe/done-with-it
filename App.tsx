import { Text, TextInput } from 'react-native';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingScreen';
import Screen from './app/components/Screen';
import { useState } from 'react';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

export type CategoryItem = {
  label: string;
  value: number;
};

const categories: CategoryItem[] = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
