import React, { useContext } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { windowWidth } from "../services/utils";
// import { AiOutlineMenu } from 'react-icons/ai';
function ComponentWithNavigationBar() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/messenger.png")}
          style={styles.image}
        />
      </View>
      <View>
        <View style={styles.nav}>
          <View style={[styles.menu, { backgroundColor: "black" }]}></View>
          <View style={[styles.menu, { backgroundColor: "black" }]}></View>
          <View style={[styles.menu, { backgroundColor: "black" }]}></View>
        </View>
      </View>
      {/* <Text>Nav</Text> */}
    </View>
  );
}

export default ComponentWithNavigationBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    justifyContent: "space-between",
    position: "absolute",
    zIndex: 20,
    top: 0,
    left: 0,
    flexDirection: "row",
  },
  image: {
    width: 30,
    height: 30,
  },
  nav: {
    flex: 1,
    flexDirection: "column",
    gap: 5,
  },
  menu: {
    width: 40,
    height: 3,
  },
});
