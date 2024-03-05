import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function DetailsScreen({  route, navigation, styles}) {
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

  export default DetailsScreen