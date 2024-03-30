import { Controller, useFormContext } from 'react-hook-form';
import AppPicker, { CategoryItem } from '../AppPicker';
import ErrorMessage from './ErrorMessage';

interface Props {
  items: CategoryItem[];
  name: string;
  placeholder: string;
}

const AppFormPicker = ({ items, name, placeholder }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <>
          <AppPicker
            items={items}
            onSelectItem={(item) => onChange(item)}
            placeholder={placeholder}
            selectedItem={value}
          />
          <ErrorMessage error={error?.message} />
        </>
      )}
    />
  );
};

export default AppFormPicker;
