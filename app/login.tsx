import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import Card from "../components/login/BigCard";
import Login from "../components/login/Login";

export default function login() {
 
  return (
    <View style={styles.container}>
      <Card
        text="Soca Rão"
        link="https://raw.githubusercontent.com/RafaelSedor/Avaliacao1/main/Audi-Car-Transparent-Background.png"
      />
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#434D36",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
    paddingTop: 20,
  },

});
