import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { z } from 'zod';
import Screen from '../components/Screen';
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from '../components/forms';
import FormImagePicker from '../components/forms/FormImagePicker';
import useLocation from '../hooks/useLocation';

const schema = z.object({
  title: z.string().min(1),
  price: z.number({ coerce: true }).min(1).max(10000),
  description: z.string(),
  category: z.object({
    label: z.string(),
    value: z.number(),
  }),
  images: z.array(z.string()).min(1),
});

type FormData = z.infer<typeof schema>;

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Camera', value: 3 },
];

const ListingEditScreen = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      images: [],
    },
  });
  const location = useLocation();

  const onSubmit = (data: FieldValues) => console.log(location);

  return (
    <Screen style={styles.container}>
      <Form useFormReturn={methods}>
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField keyboardType="numeric" maxLength={8} name="price" placeholder="Price" />
        <Picker items={categories} name="category" placeholder="Category" />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton onSubmit={onSubmit}>Post</SubmitButton>
      </Form>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
