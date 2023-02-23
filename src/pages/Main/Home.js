import React,{useState,useEffect} from "react";
import { Text,View,StyleSheet,FlatList, Button} from "react-native";
import axios from "axios";
import Products from "./Products";

const Home = () => {
  const[product,setProduct] = useState([]);
  
useEffect(() =>{
  fetchData();
},[]);

  async function fetchData(){
    const response = await axios.get('https://dummyjson.com/products');
    setProduct(response.data.products);
  } 
  const renderProduct = ({item}) => 
  <Products 
    images = {item.images[0]}
    title = {item.title}
    price = {item.price}
    />

  return(
    <View style={styles.container}>
      <FlatList 
        data = {product}
        renderItem = {renderProduct}
        keyExtractor={item => item.id}
      />
      
    
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F2CD5C",
  },
})