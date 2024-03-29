import { View } from 'react-native';
import { ComponentProps } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type MaterialIconsName = ComponentProps<typeof MaterialCommunityIcons>['name'];

interface Props {
  name: MaterialIconsName;
  size?: number;
  backgroundColor: string;
  iconColor?: string;
}

function Icon({ name, size = 40, backgroundColor = '#000', iconColor = '#fff' }: Props) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default Icon;
