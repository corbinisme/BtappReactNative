import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useStoreState } from 'easy-peasy';
import { useWindowDimensions } from 'react-native';


function DetailsScreen({ navigation, styles}) {
 
    
    const data = useStoreState((state)=> state.data);
    const selectedProductId = useStoreState((state)=> state.selectedProductId);
    const { width } = useWindowDimensions();

    const currentMedia = data.filter((item)=> item.id === selectedProductId);
    const title = currentMedia[0] && currentMedia[0].title;
    const summary = currentMedia[0] && currentMedia[0].summary;
    // strip html tags from summary
    const summaryText = summary && summary.replace(/<[^>]*>?/gm, '');
    return (
      <View style={styles.page}>

        
        {currentMedia[0] && <View>
          <Text style={styles.heading}>{currentMedia[0].title}</Text>
          <Text>{summaryText}</Text>
          <View style={styles.imagewrapper}>
            <Image source={{uri: currentMedia[0].image}} style={{width: 200, height: 200}} />
          </View>
          <Text>{JSON.stringify(currentMedia[0])}</Text>
        </View>}
        

        
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  export default DetailsScreen