import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { z } from 'zod';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(4),
});

type FormData = z.infer<typeof schema>;

const RegisterScreen = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <Screen style={styles.screen}>
      <AppForm useFormReturn={methods}>
        <AppFormField
          name="name"
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          placeholder="Name"
        />
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
        <SubmitButton onSubmit={onSubmit}>Login</SubmitButton>
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});

export default RegisterScreen;
