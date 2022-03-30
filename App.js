import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import TicketsScreen from './screens/main/TicketsScreen';
import TicketsSearchScreen from './screens/main/TicketsSearchScreen';

const MainStack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name='TicketsSearch'
          component={TicketsSearchScreen}
        />
        <MainStack.Screen name='Tickets' component={TicketsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
