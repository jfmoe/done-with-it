import React, { ComponentProps } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import AppTextInput from './AppTextInput';

type AppTextInput = ComponentProps<typeof AppTextInput>;

interface Props extends AppTextInput {
  name: string;
}

const AppFormField = ({ name, ...otherProps }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <AppTextInput
          value={value}
          onChangeText={(text) => onChange(text)}
          onBlur={onBlur}
          errorMessage={error?.message}
          {...otherProps}
        />
      )}
    />
  );
};

export default AppFormField;
