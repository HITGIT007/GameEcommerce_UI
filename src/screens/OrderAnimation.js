import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/slices/MyCartSlice';

export default function OrderAnimation() {
    const navigation = useNavigation()
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(clearCart())
        setTimeout(() =>{
            navigation.navigate('Home')
           
        },2500)
    })
  return (
    <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:"center", backgroundColor: '#FFFED7'}}>
  <LottieView  style={{width:300 , height:300}} source={require('../assets/orderPlaced.json')} autoPlay 
  
  onAnimationFinish={()=> navigation.navigate('Home')}
  
  />
  <View style={{marginTop:-60}}>
  <Text style={{color:"#AD40AF", fontSize:20, textAlign:'center'}}>Order Placed !! </Text>
  <Text style={{color:"#AD40AF", fontSize:20, textAlign:'center'}}>🕹️🎮 Thank You 🎮🕹️</Text>
  </View>
    </SafeAreaView>
  
  );
}