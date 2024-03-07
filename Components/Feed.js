import { View, Text} from 'react-native';
import { useEffect, useState } from 'react';
import { getDataForSwiper } from '../utils/Helpers';
import Card from './Card';
import SwiperComponent from './SwiperComponent';
import CarouselComponent from './CarouselComponent';



import { useStoreActions, useStoreState } from 'easy-peasy';
//import fetch from 'cross-fetch';
function Feed(props){
    const { type, styles } = props;
    const [post, setPost] = useState();
    const navigation = props.navigation;
    const [includes, setIncludes] = useState();
    const [allData, setAllData] = useState([]);
    const base = 'https://cas-development.ucg.org';
    
    const data = useStoreState((state)=> state.data);
    const addDataToStore = useStoreActions((actions)=> actions.addData)

    const addDataClick = (data) => {

      addDataToStore(data);
    }
   
    
    let btUrl = '';
    let btHeading = ''
    switch(type){
      case "BTDAILY":
        btUrl = base + '/jsonapi/views/watch_tv/block_2?include=field_featured_image.thumbnail,field_video&fields[uri]';
        btHeading = "BT Daily";
        break;
      case "BTINTERVIEW":
        btUrl = base + '/jsonapi/views/watch_tv/block_8?include=field_featured_image.thumbnail,field_video&fields[uri]';
        btHeading = "BT Interviews";
        break;
      case "MAGNIFIED":
        btUrl = base + '/jsonapi/views/watch_tv/block_9?include=field_featured_image.thumbnail,field_video&fields[uri]';
        btHeading = "Magnified";
    } 
    const [error, setError] = useState(null);

    useEffect(() => {
        
          const fetchData = async () => {
            try {
              const response = await fetch(btUrl, {headers: {'Content-Type': 'application/json'}});
              const data = await response.json();
              setAllData(getDataForSwiper(data.data, data.included, type));
              if(allData.length>0) {
                //console.log("allData", allData)
              }
              addDataClick(allData);
            } catch (error) {
                setError(error);
                console.error('Error fetching data:', error);
            }
          };
          
          fetchData();
          
          
    }, []);
    return(
        <View style={{marginBottom: 20, height: 300}}>
          <Text style={styles.heading}>{btHeading}</Text>
          <SwiperComponent data={allData} style={{height: 200}} navigation={navigation} styles={styles} />
        </View>
    )

}
export default Feed;