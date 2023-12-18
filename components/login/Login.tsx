import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import IconButton from "./IconButton";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSearch = () => {
    if (username != "teste" && password != "123") {
      {
        alert("Login/Senha incorretos!");
      }
    } else {
      router.push("/main");
    }

    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Digite seu nome de usuário"
        testID="input-email"
      />
      <Text style={styles.text}>Senha</Text>
      <TextInput
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        placeholder="Digite sua senha"
        testID="input-senha"
      />
      <IconButton
        style={styles.buttom}
        iconName="location-enter"
        onPress={handleSearch}
        testID="button-IconButton"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 230,
    height: 250,
    backgroundColor: "#7Fa653",
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
  },

  text: {
    alignContent: "flex-start",
    paddingTop: 20,
    fontSize: 24,
    fontWeight: "600",
    color: "#ffff",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 2, 
  },

  buttom: {
    paddingTop: 15,
    paddingLeft: 155,
  },
});
