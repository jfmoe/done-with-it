import { useState } from 'react';
import { FlatList, ImageSourcePropType, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

export interface Message {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

const initialMessages: Message[] = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const handlePress = () => {
    console.log('pressed');
  };

  const handleDelete = (id: number) => {
    console.log('pressed');
    setMessages(messages.filter((m) => m.id !== id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
            onPress={handlePress}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
