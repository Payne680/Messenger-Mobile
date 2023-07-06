import React from 'react'
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chats from './src/screens/Chats/Chats';
import People from './src/screens/People/People';
import Calls from './src/screens/Calls/Calls';
import Stories from './src/screens/Stories/Stories';
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
              iconName = focused ? images.chat_active : images.chat_inactive;
            } else if (route.name === 'Calls') {
              iconName = focused ? images.calls : images.calls_inactive;
            } else if (route.name === 'People') {
              iconName = focused ? images.people : images.people_inactive;
            } else if (route.name === 'Stories') {
              iconName = focused ? images.stories : images.stories_inactive;
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={styles.tab_icons} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          headerShown: false,
          tabBarShowLabel: false,
        })}>
          <Tab.Screen name="Chats" component={Chats} />
          <Tab.Screen name="Calls" component={Calls} />
          <Tab.Screen name="People" component={People} />
          <Tab.Screen name="Stories" component={Stories} />
        </Tab.Navigator>
      </NavigationContainer>    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  tab_icons: {
    width: 25,
    height: 25,
  }
});
