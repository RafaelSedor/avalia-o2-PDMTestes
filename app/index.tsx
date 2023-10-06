import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import Login from './login'

export default function index() {
  return (
     <Redirect href="/main"/> 
  )
}

const styles = StyleSheet.create({})