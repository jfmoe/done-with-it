import { View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';

export default function App() {
  return (
    <View>
      <Card title="title" subTitle="$100" image={require('./app/assets/jacket.jpg')} />
    </View>
  );
}
