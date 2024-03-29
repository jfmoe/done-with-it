import Constants from 'expo-constants';
import { ReactNode } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

interface Props {
  children: ReactNode;
  style?: Object;
}

const Screen = ({ children, style }: Props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
