import { useController, useFormContext } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

interface Props {
  name: string;
}

const FormImagePicker = ({ name }: Props) => {
  const { control } = useFormContext();
  const {
    field: { value: imageUris, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const handleAdd = (uris?: string[]) => {
    if (uris) onChange([...imageUris, ...uris]);
  };

  const handleRemove = (uri: string) => {
    onChange(imageUris.filter((imageUri: string) => imageUri !== uri));
  };

  return (
    <>
      <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
      <ErrorMessage error={error?.message} />
    </>
  );
};

const styles = StyleSheet.create({});

export default FormImagePicker;
