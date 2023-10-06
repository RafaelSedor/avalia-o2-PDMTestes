import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useActionSheet } from '@expo/react-native-action-sheet';
import IconButton from './IconButton';

export default function MenuComponent() {

  const { showActionSheetWithOptions } = useActionSheet();

const onPress = () => {
    const options = ['Delete', 'Save', 'Cancel'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

  showActionSheetWithOptions(
    {
      options,
      cancelButtonIndex,
      destructiveButtonIndex
    },
    (selectedIndex?: number) => {
       switch (selectedIndex) {
         case 1:
         // Save
         console.log("save")
         break;
  
         case destructiveButtonIndex:
         // Delete
         console.log("Delete")
         break;
  
         case cancelButtonIndex:
         console.log("Canceled")
         // Canceled
         break;
        }
    }
  )
}

  return (
     <IconButton
        // style={styles.buttom}
        iconName="bars"
        onPress={() => onPress()}
    />
  )
}

const styles = StyleSheet.create({})

