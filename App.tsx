import React from 'react'
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chats from './src/screens/Chats/Chats';
import People from './src/screens/People/People';
import Discover from './src/screens/Discover/Discover';
import { images } from './src/images';

export default function App() {

  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Chats') {
              iconName = focused ? images.chat_active : images.user_6;
            } else if (route.name === 'People') {
              iconName = focused ? images.people : '';
            } else if (route.name === 'Discover') {
              iconName = focused ? images.discover : '';
            }

            // You can return any component that you like here!
            return <Image source={iconName} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          // headerShown: false,
          // tabBarShowLabel: false,
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
