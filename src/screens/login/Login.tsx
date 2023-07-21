import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  StatusBar,
  Keyboard,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import ComponentWithNavigationBar from "../../components/Header";
import { auth } from "../../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { styles } from "./styles";

export default function Login() {
  useEffect(() => {
    StatusBar.setBarStyle("light-content", true);
  }, []);
  const [user, setUser] = useState<any>({ email: "", password: "" });
  const [loading, setIsLoading] = useState<any>(false);
  const signIn = async () => {
    setIsLoading(true);
    setTimeout(() => {
      try {
        const responce = signInWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        console.log(responce);
      } catch (error: any) {
        console.log(error);
        alert("sign in failed :" + error.message);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ScrollView>
        <View style={styles.container}>
          {/* <View style={styles.nav}>

        </View> */}
          <ComponentWithNavigationBar />
          <LinearGradient
            colors={["#0088FF", "#A033FF", "#FF5C87"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ borderRadius: 5 }}
          >
            <Text style={styles.welcomeText}>Please Login</Text>
          </LinearGradient>

          <Text style={styles.loginText}>Login</Text>
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#808e9b"
            style={styles.input}
            autoCorrect={true}
            // autoCapitalize={false}
            autoComplete="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#808e9b"
            style={styles.input}
            secureTextEntry={true}
            textContentType="password"
          />
          <TouchableOpacity>
            <Text style={styles.fpText}>Forgot Password?/Find My Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={signIn} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          {/* // <Button title="Login" onPress={signIn} style={styles.loginButton} /> */}
          <View style={styles.loginWithBar}>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="google" type="font-awesome" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="facebook-square" type="font-awesome" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="apple" type="font-awesome" />
            </TouchableOpacity>
          </View>
          <View style={styles.signUpTextView}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <TouchableOpacity>
              <Text style={[styles.signUpText, { color: "#0a7cff" }]}>
                {" Sign Up"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
