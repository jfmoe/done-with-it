import { ComponentProps, ReactNode } from 'react';
import { Image, ImageSourcePropType, StyleSheet, TouchableHighlight, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../config/colors';
import AppText from './AppText';

type RenderAction = ComponentProps<typeof Swipeable>['renderRightActions'];

interface Props {
  title: string;
  subTitle?: string;
  image?: ImageSourcePropType;
  renderRightActions?: RenderAction;
  onPress?: () => void;
  IconComponent?: ReactNode;
}

const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  renderRightActions,
  onPress,
}: Props) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={() => onPress && onPress()}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
