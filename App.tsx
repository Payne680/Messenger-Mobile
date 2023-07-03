import React from 'react'
import { StyleSheet, View } from 'react-native';
import Chats from './src/screens/Chats/Chats';

export default function App() {
  return (
    <View style={styles.container}>
      <Chats />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
