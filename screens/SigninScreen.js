import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Image } from "react-native";
import { Button } from "react-native-elements";
import swach from "../API/swach";
import Axios from "axios";
const SigninScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [err1, setErr1] = useState("");
  const [success, setSuccess] = useState("");
  const validation = () => {
    var flag = true;
    setErr("");
    setErr1("");
    if (email === "") {
      flag = false;
      setErr("Email cannot be blank");
    }
    if (password == "") {
      setErr1("password field cannnot be empty");
      flag = false;
    }
    return flag;
  };
  const handleSubmit = async () => {
    if (validation()) {
      console.log("here");
      try {
        console.log("1");
        const res = await Axios.post(
          "https://swachbackend.herokuapp.com/signin",
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(2);
        console.log("lol");
        setSuccess("Successfull");
      } catch (e) {
        console.log("lol2");
        console.log(e);
        console.log(e.response.data.error);
        setErr1(e.response.data.error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/logo.png")}
      />
      <Text style={styles.title}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder={"Enter Email Address"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Text style={styles.error}>{err}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder={"Enter Password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Text style={styles.error}>{err1}</Text>
      <Text style={styles.success}>{success}</Text>
      <Button
        title="Login"
        buttonStyle={styles.button}
        onPress={handleSubmit}
      />
      <Text style={styles.text}>New User? </Text>
      <Text style={styles.text}>Forgot password?</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontStyle: "normal",
    color: "midnightblue",
  },
  text: {
    padding: 3,
    color: "darkblue",
  },
  image: {
    width: 250,
    height: 100,
    marginBottom: 30,
  },
  input: {
    width: 300,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
    fontSize: 15,
  },
  button: {
    backgroundColor: "midnightblue",
    marginTop: 20,
    marginBottom: 50,
    width: 200,
  },
  error: {
    width: 300,
    color: "red",
  },
  success: {
    color: "green",
  },
});
SigninScreen["navigationOptions"] = {
  header: null,
};
export default SigninScreen;
