import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Pages/Home';
import DetailsScreen from './Pages/Details';
import Live from './Pages/Live';
import Info from './Pages/Info';

import { StoreProvider } from 'easy-peasy';
import cartStore from './Components/Cart';

const styles = StyleSheet.create({
  page: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  button: {
    margin: 10,
    marginVertical: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  card: {
    margin: 10,
    width: 300,
  },
  mediaheading: {
    fontSize: 18,
  },
  imagewrapper: {
    backgroundColor: '#ddd',
  }
});




const Stack = createNativeStackNavigator();



function App() {


  return (
    <StoreProvider store={cartStore}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={
            {
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
          }}>
          <Stack.Screen name="Home" options={{ 
            title: 'Beyond Today',
            headerStyle: {
              backgroundColor: '#eee',
              textAlign: 'right',
            },
            headerTintColor: '#333',
            headerTitleStyle: {
              fontWeight: 'bold',
            }, 
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#333"
              />
            ),
            }}>
              {(props) => <HomeScreen {...props} styles={styles} />} 
          </Stack.Screen> 
          <Stack.Screen name="Details" >
            {(props) => <DetailsScreen {...props} styles={styles} />} 
          </Stack.Screen>
          <Stack.Screen name="Info" component={Info} />
          <Stack.Screen name="Live" component={Live} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;


