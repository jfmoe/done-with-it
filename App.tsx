import { Text, TextInput } from 'react-native';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingScreen';
import Screen from './app/components/Screen';
import { useState } from 'react';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
  const [text, setText] = useState('');

  return (
    <Screen>
      <AppTextInput placeholder="text" icon="email" />
    </Screen>
  );
}
