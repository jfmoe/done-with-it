import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import defaultStyles from '../config/styles';
import { MaterialIconsName } from './Icon';

interface Props extends TextInputProps {
  icon?: MaterialIconsName;
  errorMessage?: string;
}

const AppTextInput = ({ icon, errorMessage, ...otherProps }: Props) => {
  return (
    <>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
        <TextInput style={styles.textInput} {...otherProps} />
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </>
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
  errorMessage: {
    color: defaultStyles.colors.danger,
    marginLeft: 10,
  },
});

export default AppTextInput;
