import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

interface Props {
  visible: boolean;
}

const ActivityIndicator = ({ visible }: Props) => {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      loop
      source={require('../assets/animations/loader.json')}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default ActivityIndicator;
