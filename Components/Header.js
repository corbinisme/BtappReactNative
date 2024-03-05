import Logo from "./Logo";
import { StyleSheet, Text, View, Image } from 'react-native';
// make new style sheet for this component
const styles = StyleSheet.create({
    header: {
      padding: 10,
      fontSize: 18,
      height: 44,
      backgroundColor: '#eee',
    },
  });

function Header(){
    return(
        <View className="header">
            <View className="navbar" id="mainNav">
                <View className="logoWrap d-flex justify-content-center w-100 align-content-center pt-2 pb-2">
                    <Text>Hi</Text>
                    <Logo />
                </View>
            </View>
        </View>
    )

}
export default Header;