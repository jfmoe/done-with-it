import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

export interface Message {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    imageUrl: '../assets/mosh.jpg',
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    imageUrl: '../assets/mosh.jpg',
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

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
            imageUrl={item.imageUrl}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
            onPress={handlePress}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
