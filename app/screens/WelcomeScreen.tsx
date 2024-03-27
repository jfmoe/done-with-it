import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

const WelcomeScreen = () => {
  const handleLogin = () => {};
  const handleRegister = () => {};

  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton onPress={handleLogin}>Login</AppButton>
        <AppButton onPress={handleRegister} color="secondary">
          Register
        </AppButton>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
