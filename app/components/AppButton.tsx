import { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

interface Props {
  children: ReactNode;
  color?: 'primary' | 'secondary';
  onPress: () => void;
}

const AppButton = ({ children, color = 'primary', onPress }: Props) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default AppButton;
