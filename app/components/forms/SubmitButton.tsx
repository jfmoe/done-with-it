import { ReactNode } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';
import AppButton from '../AppButton';

interface Props {
  children: ReactNode;
  onSubmit: (data: FieldValues) => void;
}

const SubmitButton = ({ children, onSubmit }: Props) => {
  const { handleSubmit } = useFormContext();
  return <AppButton onPress={handleSubmit(onSubmit)}>{children}</AppButton>;
};

export default SubmitButton;
