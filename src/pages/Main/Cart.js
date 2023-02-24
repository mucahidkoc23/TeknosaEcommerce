import React from "react";
import { Text ,View,StyleSheet,FlatList} from "react-native";
import {useSelector} from "react-redux";

const Cart = () => { 
 // const selector = useSelector(s =>s.productsList)
  return(
    <View style={styles.container}>
     {/* <FlatList 
        data={selector}
        renderItem={({item})=>{<Text>{item}</Text>}}/>*/}
           
    </View>
  );
};
export default Cart;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F2CD5C",
  },
})