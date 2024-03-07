import Swiper from 'react-native-swiper';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useStoreActions } from 'easy-peasy';
import Card from './Card';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper: {
        height: 200,
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ddd',
    },
    text: {
      color: '#333',
      fontSize: 30,
      fontWeight: 'bold'
    }
});
function SwiperComponent(props){
    const data= props.data;
    const navigation = props.navigation;

    return (
        <Swiper style={styles.wrapper} 
        loop 
        showsPagination 
        height={200} 
        showsButtons={true}
        >
            {data.map((item) => {
                    return <View key={item.id} style={styles.slide1}>
                        
                        <Card item={item} styles={styles} navigation={navigation} />
                       
                      </View>
                })}
        
      </Swiper>
    )
}
export default SwiperComponent;