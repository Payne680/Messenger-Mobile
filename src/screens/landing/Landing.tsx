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
import { styles } from "./styles";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth, provider } from "../../../firebase/config";

export default function Landing() {
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

  const handleFacebookLogin = () => {
    signInWithPopup(auth, provider)
      .then((result: any) => {
        setUser((prev: any) => [...prev, result.user]);
      })
      .catch((err) => {
        throw err;
      });
  };

  // signInWithPopup(auth, provider)
  //   .then((result) => {
  //     // The signed-in user info.
  //     const user = result.user;

  //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //     const credential: null =
  //       FacebookAuthProvider.credentialFromResult(result);
  //     const accessToken = credential.accessToken;

  //     // IdP data available using getAdditionalUserInfo(result)
  //     // ...
  //   })
  //   .catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = FacebookAuthProvider.credentialFromError(error);

  //     // ...
  //   });
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ScrollView>
        <View style={styles.container}>
          {loading && <Text>loading</Text>}
          {/* <View style={styles.nav}>

        </View> */}
          <ComponentWithNavigationBar />
          <LinearGradient
            colors={["#0088FF", "#A033FF", "#FF5C87"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ borderRadius: 5 }}
          >
            <Text style={styles.welcomeText}>Hang out anytime, anywhere</Text>
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
            <Text style={styles.fpText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={signIn}>
            <Text style={styles.loginButtonText}>Login</Text>
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
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <TouchableOpacity>
              <Text style={[styles.signUpText, { color: "#0a7cff" }]}>
                {" Sign Up"}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.fbLogin}
              onPress={handleFacebookLogin}
            >
              <Text style={styles.fbLoginTxt}>Login with FaceBook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
