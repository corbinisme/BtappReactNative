import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './Components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BTdaily from './Components/BtDaily';
import HomeScreen from './Pages/Home';
import DetailsScreen from './Pages/Details';
import Info from './Pages/Info';

const styles = StyleSheet.create({
  page: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
});


function DetailsScreen2({  route, navigation}) {
  const pageStyle = styles.page;
  const { itemId, otherParam } = route.params;
  return (
    <View style={pageStyle}>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ 
          title: 'Beyond Today',
          headerStyle: {
            backgroundColor: '#eee',
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, 
          }}>
            {(props) => <HomeScreen {...props} styles={styles} />} 
        </Stack.Screen> 
        <Stack.Screen name="Details" >
          {(props) => <DetailsScreen {...props} styles={styles} />} 
        </Stack.Screen>
        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


