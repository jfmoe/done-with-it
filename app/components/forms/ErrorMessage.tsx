import { StyleSheet } from 'react-native';

import AppText from '../AppText';

interface Props {
  error?: string;
}

function ErrorMessage({ error }: Props) {
  if (!error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: { color: 'red' },
});

export default ErrorMessage;
