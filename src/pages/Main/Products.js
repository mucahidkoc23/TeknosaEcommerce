import React from "react";
import {View,Text,StyleSheet,Image,Dimensions} from "react-native";

const Products = props =>{
  return(
    <View style = {styles.container}>
      <Image style={styles.imageStyle} source={{uri:props.images}}/> 
      <View style={styles.bodyContainer}>
        <Text style={styles.titleStyle}>{props.title}</Text>
        <Text style={styles.priceStyle}>{props.price}$</Text>
      </View>  
    </View>
  );
};
export default Products;

const styles = StyleSheet.create({
    container:{
      borderWidth:1,
      margin:5,
      marginRight:27,
      flexDirection:"row",

    },
    bodyContainer:{
      flex:1,
      padding:5,    
    },
    titleStyle:{
      fontWeight:"bold",
      fontSize:25,
    },
    priceStyle:{
      fontSize:20,
      marginTop:10,
    },
    imageStyle:{
      height:Dimensions.get('window').height/4,
      width:200,
      resizeMode:'contain',
      minHeight:100,
      backgroundColor:"white",      
    },
    
});