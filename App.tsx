import { useState } from 'react';
import ImageInputList from './app/components/ImageInputList';
import Screen from './app/components/Screen';

export default function App() {
  const [imageUris, setImageUris] = useState<string[]>([]);

  const handleAdd = (uris?: string[]) => {
    if (uris) setImageUris([...imageUris, ...uris]);
  };

  const handleRemove = (uri: string) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen>
      <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
    </Screen>
  );
}
