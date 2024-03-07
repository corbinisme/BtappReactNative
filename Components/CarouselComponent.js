import Carousel from 'react-native-snap-carousel';
import { View, Text, StyleSheet, Image } from 'react-native';
import {useEffect, useState} from 'react';
import { useWindowDimensions } from 'react-native';

const data = [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
    { title: 'Item 4' },
    { title: 'Item 5' },
  ];


const styles = StyleSheet.create({
    item: {
      backgroundColor: 'lightblue',
      borderRadius: 5,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
    },
});

 const renderItem = ({ item }) => (
    <View style={styles.item}>
        <View style={styles.imagewrapper}>
            <Image source={{uri: item.featuredImageSrc}} style={{width: 200, height: 100}} />
        </View>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

function CarouselComponent(props){
    const [entries, setEntries] = useState([]);
    const allData= props.data;
    const navigation = props.navigation;
    const { width } = useWindowDimensions();
    const itemWidth = width / 2;
    return (
        <Carousel
          data={allData}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={itemWidth}
          layout={'default'}
          loop
        />
      );
}

export default CarouselComponent;