import { View, Text, Button, Image } from 'react-native';
import { useStoreActions } from 'easy-peasy';
function Card(props){
    const styles = props.styles;
    const item = props.item;
    const navigation = props.navigation;

    const setSelectedId = useStoreActions((actions)=> actions.setSelectedProductId)

    function setSelectedItem(id) {
        setSelectedId(id);
        navigation.navigate('Details')
    }

    return (
        <View style={styles.mediacard}>
            <View style={styles.imagewrapper}>
                <Image source={{uri: item.image}} style={{width: 200, height: 100}} />
            </View>
            <Text style={styles.mediaheading}>{item.title}</Text>
            <Button title="View" onPress={()=>setSelectedItem(item.id)} />
            
        </View>
    )
}

export default Card;