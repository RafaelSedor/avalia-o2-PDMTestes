import { StyleSheet, View, Text, TextInput, Dimensions, Button } from "react-native";
import React, { useState } from "react";
import IconButton from "../components/login/IconButton";
import Card from "../components/login/BigCard";
import { Redirect, Stack, useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSearch = () => {
    if (username != "teste" && password != "123") {
        router.push("/main")
    } else {
      router.push("/main")
    }

    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Card
        text="Soca Rão"
        link="https://raw.githubusercontent.com/RafaelSedor/Avaliacao1/main/Audi-Car-Transparent-Background.png"
      />
      <Text style={styles.text}>Login</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Digite seu nome de usuário"
      />
      <Text>Senha</Text>
      <TextInput
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        placeholder="Digite sua senha"
      />
      <IconButton
        style={styles.buttom}
        iconName="location-enter"
        onPress={handleSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
    paddingTop: "50%",
  },

  text: {
    paddingTop: 100,
  },

  buttom: {
    paddingTop: 20,
  },
});
