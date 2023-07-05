import React from 'react'
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chats from './src/screens/Chats/Chats';
import People from './src/screens/People/People';
import Discover from './src/screens/Discover/Discover';

export default function App() {

  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Chats') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'People') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === 'Discover') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Image source={{ '' }} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
          <Tab.Screen name="Chats" component={Chats} />
          <Tab.Screen name="People" component={People} />
          <Tab.Screen name="Discover" component={Discover} />
        </Tab.Navigator>
      </NavigationContainer>    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
