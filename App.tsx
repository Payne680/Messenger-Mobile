import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Landing from "./src/screens/landing/Landing";
import Login from "./src/screens/login/Login";
import MyContext from "./src/context/context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./src/screens/signup/SignUp";
import Message from "./src/messages/Message";
import { User, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "./firebase/config";

const Stack = createNativeStackNavigator();

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      setCurrentUser(user);
    });
  }, []);
  return (
    <MyContext.Provider value={{}}>
      <NavigationContainer>
        {!currentUser ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="signIn" component={Landing} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="messaging" component={Message} />
          </Stack.Navigator>
        )}{" "}
        {/* <Stack.Navigator>
          <Stack.Screen name="Landing" component={Landing} />
        </Stack.Navigator> */}
      </NavigationContainer>
      {/* <View style={styles.container}> */}
      {/* <Text>Hello World!</Text>
      <StatusBar style="auto" /> */}
      {/* <Login />
      </View> */}
    </MyContext.Provider>
  );
}
