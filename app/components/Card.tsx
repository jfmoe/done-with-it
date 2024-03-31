import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

interface Props {
  title: string;
  subTitle: string;
  imageUrl: string;
  onPress: () => void;
}

const Card = ({ title, subTitle, imageUrl, onPress }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} resizeMode="cover" style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    marginBottom: 6,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
});

export default Card;
