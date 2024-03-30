import { useController, useFormContext } from 'react-hook-form';
import AppPicker, { CategoryItem } from '../AppPicker';
import ErrorMessage from './ErrorMessage';

interface Props {
  items: CategoryItem[];
  name: string;
  placeholder: string;
}

const AppFormPicker = ({ items, name, placeholder }: Props) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => onChange(item)}
        placeholder={placeholder}
        selectedItem={value}
      />
      <ErrorMessage error={error?.message} />
    </>
  );
};

export default AppFormPicker;
