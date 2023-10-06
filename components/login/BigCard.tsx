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
        backgroundColor: "#d3d3d3",
        height: 130,
        width: 150,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        
  },
  
  image:{
    width: 220,
    height: 110,
  },

  textColor:{
    color: "#000000",
    paddingBottom: 20,
  },

})