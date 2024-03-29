import { ReactNode } from 'react';
import { FormProvider, UseFormReturn, FieldValues } from 'react-hook-form';

interface Props<T extends FieldValues> {
  children: ReactNode;
  useFormReturn: UseFormReturn<T>;
}

const AppForm = <T extends FieldValues>({ children, useFormReturn }: Props<T>) => {
  return <FormProvider {...useFormReturn}>{children}</FormProvider>;
};

export default AppForm;
