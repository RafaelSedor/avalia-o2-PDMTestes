import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";
import IconButton from "./IconButton";
import { Redirect, useRouter } from "expo-router";

export default function MenuComponent() {
  const { showActionSheetWithOptions } = useActionSheet();
  const router = useRouter();


  const options = ["About", "Logout", "Cancel"];
  const destructiveButtonIndex = 1;
  const cancelButtonIndex = 2;

  const handlePress = () => {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (pressedId) => {
        switch (pressedId) {
          
          case 0:
            router.push("/about")
            console.log("About");
            break;

          case destructiveButtonIndex:
             router.replace("..")
            console.log("Logout");
            break;

          case cancelButtonIndex:
            console.log("Canceled");
            // Canceled
            break;
        }
      }
    );
  };

  return (
    <IconButton
      iconName="bars"
      onPress={handlePress}
      testID="button-IconButton"
    />
  );
}

const styles = StyleSheet.create({});
