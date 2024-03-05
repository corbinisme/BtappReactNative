import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import BTdaily from '../Components/BtDaily';

function HomeScreen({ navigation, styles }) {
    const pageStyle = styles.page;
    return (
      <View style={pageStyle}>
      <Text>Home Screen</Text>
      

      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
      <Button title="Go to Info" onPress={() => navigation.navigate('Info')} />
    </View>
    );
  }

  export default HomeScreen;