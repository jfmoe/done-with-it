import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import defaultStyles from '../config/styles';
import { MaterialIconsName } from './Icon';

interface Props extends ComponentProps<typeof TextInput> {
  icon?: MaterialIconsName;
}

const AppTextInput = ({ icon, ...otherProps }: Props) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={defaultStyles.colors.medium}
        style={styles.icon}
      />
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    ...defaultStyles.text,
  },
});

export default AppTextInput;
