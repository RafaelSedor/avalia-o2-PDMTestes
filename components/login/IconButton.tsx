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
      <MaterialCommunityIcons name={iconName} size={24} color="grey" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
