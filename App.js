import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import TicketsScreen from './screens/main/TicketsScreen';
import TicketScreen from './screens/main/TicketScreen';

const MainStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>

      <MainStack.Navigator>
        <MainStack.Screen name='Tickets' component={TicketsScreen} />
        <MainStack.Screen name='Ticket' component={TicketScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
