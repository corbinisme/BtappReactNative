import { useEffect, useState } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Button, 
  Image,   
  SafeAreaView,
  ScrollView} from 'react-native';
import { useStoreState } from 'easy-peasy';
import { useWindowDimensions } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';


function DetailsScreen({ navigation, styles}) {
 
    
    const data = useStoreState((state)=> state.data);
    const selectedProductId = useStoreState((state)=> state.selectedProductId);
    const { width } = useWindowDimensions();

    const currentMediaNode = data.filter((item)=> item.id === selectedProductId);
    const currentMedia = currentMediaNode[0];
    if(currentMedia){
      const title = currentMedia && currentMedia.title;
      const summary = currentMedia && currentMedia.summary;
      // strip html tags from summary
      const summaryText = summary && summary.replace(/<[^>]*>?/gm, '');
      let ytID = null;
      let ytIDMatch = null;
      if(currentMedia.remoteVideoSrc){
        // substring out the youtube video id
        ytID = currentMedia.remoteVideoSrc;
        // get everything after the v= and before the next & or the end of the string

        const ytSubstringEnding = ytID.indexOf('&') > -1 ? ytID.indexOf('&') : ytID.length;
        ytIDMatch = ytID.substring(ytID.indexOf('?v=')+3, ytSubstringEnding);
      }
      return (
        <SafeAreaView>
        <ScrollView style={styles.scrollView}>
      <View style={styles.page}>
       
        
        {currentMedia && <View>
          
          <Text style={styles.heading}>{currentMedia.title}</Text>
          
          
          {ytIDMatch && <View>
           
            <YoutubePlayer
              height={300}
              play={true}
              videoId={ytIDMatch}
            />
          </View>}
          <Text style={{fontWeight: "bold"}}>{currentMedia.remoteVideoSrc}</Text>
          <Text>{summaryText}</Text>
          
        </View>}
        

        
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
      </ScrollView>
      </SafeAreaView>
      );
    } else {

      return (
        <SafeAreaView>
        <ScrollView style={styles.scrollView}>
        <View style={styles.page}>
          <Text>Details Screen: {data.length}</Text>
          <Text>No media found</Text>
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
        </ScrollView>
        </SafeAreaView>
      )
    }

  }

  export default DetailsScreen