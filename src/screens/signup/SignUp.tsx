import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import ComponentWithNavigationBar from "../../components/Header";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { styles } from "./styles";
import { auth } from "../../../firebase/config";

export default function SignUp() {
  useEffect(() => {
    StatusBar.setBarStyle("light-content", true);
  }, []);
  const [user, setUser] = useState<any>({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailValidError, setEmailValidError] = useState(false);
  const [passwordValidator, setPasswordValidator] = useState(false);

  const signUp = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (reg.test(user.email) === false) {
      setEmailValidError(true);
    }
    if (user.password.length <= 6) setPasswordValidator(true);

    if (user.password.length >= 6 && reg.test(user.email) === true) {
      setLoading(true);
      setTimeout(() => {
        try {
          const responce = createUserWithEmailAndPassword(
            auth,
            user.email,
            user.password
          );
          console.log(responce);
          alert("check your emails");
        } catch (error: any) {
          console.log(error);
          alert("sign in failed :" + error.message);
        } finally {
          setLoading(false);
        }
      }, 1000);
    }
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
            <Text style={styles.welcomeText}>Sign Up to Messenger</Text>
          </LinearGradient>

          <Text style={styles.loginText}>SignUp</Text>
          <TextInput
            placeholder="User Name"
            placeholderTextColor="#808e9b"
            style={styles.input}
            autoFocus={true}
            autoCapitalize="words"
            autoCorrect={true}
            keyboardType="default"
            returnKeyType="next"
            blurOnSubmit={false}
          />
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
            <Text style={styles.fpText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={signUp} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>SignUp</Text>
          </TouchableOpacity>
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
            <Text style={styles.signUpText}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={[styles.signUpText, { color: "#0a7cff" }]}>
                {" Login"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
