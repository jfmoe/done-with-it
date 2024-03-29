import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm, FormProvider } from 'react-hook-form';
import { Image, StyleSheet } from 'react-native';
import { z } from 'zod';
import AppButton from '../components/AppButton';
import AppFormField from '../components/AppFormField';
import Screen from '../components/Screen';
import colors from '../config/colors';

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type FormData = z.infer<typeof schema>;

const LoginScreen = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <FormProvider {...methods}>
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          icon="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          textContentType="password"
        />
      </FormProvider>

      <AppButton onPress={methods.handleSubmit(onSubmit)}>Login</AppButton>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  error: {
    color: colors.danger,
  },
});

export default LoginScreen;
