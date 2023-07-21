import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Landing from "./src/screens/landing/Landing";
import Login from "./src/screens/login/Login";
import MyContext from "./src/context/context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MyContext.Provider value={{}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Landing" component={Landing} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <View style={styles.container}> */}
      {/* <Text>Hello World!</Text>
      <StatusBar style="auto" /> */}
      {/* <Login />
      </View> */}
    </MyContext.Provider>
  );
}
