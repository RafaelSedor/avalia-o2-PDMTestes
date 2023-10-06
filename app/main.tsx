import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { connectActionSheet } from '@expo/react-native-action-sheet';
import MenuComponent from '../components/main/Menu';

function main() {

  return (
    <ActionSheetProvider>
    <View>
      <Stack.Screen
        options={
          { 
            title: 'Soca Rão',
            headerRight: () => <MenuComponent/>
          }
        }
      />
    </View>
    </ActionSheetProvider>
  )
}

const ConnectedMain = connectActionSheet(main);

export default ConnectedMain;

const styles = StyleSheet.create({})