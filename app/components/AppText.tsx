import { ReactNode } from 'react';
import { Text, TextProps } from 'react-native';
import defaultStyles from '../config/styles';

interface Props extends TextProps {
  children: ReactNode;
  style?: Object;
}

const AppText = ({ children, style, ...otherProps }: Props) => {
  return (
    <Text {...otherProps} style={[defaultStyles.text, style]}>
      {children}
    </Text>
  );
};

export default AppText;
