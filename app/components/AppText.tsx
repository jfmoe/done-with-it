import { ReactNode } from 'react';
import { Text } from 'react-native';
import defaultStyles from '../config/styles';

interface Props {
  children: ReactNode;
  style?: Object;
}

const AppText = ({ children, style }: Props) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default AppText;
