import { ReactNode } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

interface Props {
  children: ReactNode;
  style: Object;
}

const AppText = ({ children, style }: Props) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontFamily: 'Avenir',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
});

export default AppText;
