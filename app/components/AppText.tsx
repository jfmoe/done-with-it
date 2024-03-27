import { ReactNode } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

interface Props {
  children: ReactNode;
}

const AppText = ({ children }: Props) => {
  return <Text style={styles.text}>{children}</Text>;
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
