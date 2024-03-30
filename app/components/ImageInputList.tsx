import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ImageInput from './ImageInput';
import { useRef } from 'react';

interface Props {
  imageUris: string[];
  onRemoveImage: (uri: string) => void;
  onAddImage: (uris?: string[]) => void;
}

const ImageInputList = ({ imageUris, onRemoveImage, onAddImage }: Props) => {
  const scrollView = useRef<ScrollView>(null);

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current?.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <ImageInput key={uri} imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
          ))}
          <ImageInput onChangeImage={(uris) => onAddImage(uris)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default ImageInputList;
