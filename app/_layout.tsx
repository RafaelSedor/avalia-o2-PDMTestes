import { StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import {
  ActionSheetProvider,
  connectActionSheet,
} from "@expo/react-native-action-sheet";

function _layout() {
  return (
    <>
    <ActionSheetProvider>
      <Stack />
      </ActionSheetProvider>
    </>
  )
}

const ConnectedMain = connectActionSheet(_layout);

export default ConnectedMain;

const styles = StyleSheet.create({})