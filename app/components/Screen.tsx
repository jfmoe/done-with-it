import Constants from 'expo-constants';
import { ReactNode } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

interface Props {
  children: ReactNode;
}

const Screen = ({ children }: Props) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
