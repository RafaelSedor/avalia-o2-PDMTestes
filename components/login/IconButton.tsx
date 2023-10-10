import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";

type IconButtonProps = {
  iconName: any;
} & TouchableOpacityProps;

export default function IconButton({ iconName, ...rest }: IconButtonProps) {
  return (
    <TouchableOpacity style={styles.touchable} {...rest}>
      <MaterialCommunityIcons name={iconName} size={45} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    aspectRatio: 1,
  },
});
