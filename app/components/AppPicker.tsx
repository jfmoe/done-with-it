import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import { MaterialIconsName } from './Icon';
import { useState } from 'react';
import Screen from './Screen';
import PickerItem from './PickerItem';

export type CategoryItem = {
  label: string;
  value: number;
};

interface Props {
  icon?: MaterialIconsName;
  items: CategoryItem[];
  placeholder?: string;
  selectedItem?: CategoryItem;
  onSelectItem: (item: CategoryItem) => void;
}

const AppPicker = ({ icon, items, onSelectItem, selectedItem, placeholder }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
          <AppText style={styles.text}>{selectedItem?.label || placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    ...defaultStyles.text,
  },
});

export default AppPicker;
