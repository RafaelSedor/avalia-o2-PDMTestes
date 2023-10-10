import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface CardProps{
  text: string,
  link: string
}


export default function Card({ text, link }: CardProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:link}}/>
      <Text style={styles.textColor}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
        backgroundColor: "#ffff",
        height: 200,
        width: 250,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        
  },
  
  image:{
    width: 240,
    height: 120,
  },

  textColor:{
    fontSize: 40,
    fontWeight: "800",
    color: "#65b307",
    padding: 10,
    paddingBottom: 20,
  },

})