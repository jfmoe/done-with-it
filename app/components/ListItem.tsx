import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

interface Props {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
}

const ListItem = ({ title, subTitle, image }: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  detailsContainer: {},
  title: {
    fontWeight: '500',
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
