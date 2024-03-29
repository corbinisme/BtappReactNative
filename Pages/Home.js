import { useEffect, useState } from 'react';

import { StyleSheet, 
  Text, 
  View, 
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar } from 'react-native';
import Feed from '../Components/Feed';


function HomeScreen({ navigation, styles }) {
    const pageStyle = styles.page;
    const buttonStyle = styles.button;

    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate("Info")} title="Info"
          color="#444" />
      ),
    });
  
    return (
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View style={pageStyle}>
           
            <Feed type="BTDAILY" navigation={navigation} styles={styles} />
           
            <Feed type="BTINTERVIEW" navigation={navigation} styles={styles} />

           
            <Feed type="MAGNIFIED" navigation={navigation} styles={styles} />
            
            <View style={buttonStyle}>
              <Button style={buttonStyle} title="Go to Info" onPress={() => navigation.navigate('Info')} />
            </View>
            <View style={buttonStyle}>
              <Button style={buttonStyle} title="Live" onPress={() => navigation.navigate('Live')} />
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
    );
  }

  export default HomeScreen;