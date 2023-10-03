import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    BackHandler
  } from 'react-native';
  import React, {useEffect, useState} from 'react';

  
  import {useNavigation} from '@react-navigation/native';
  import { useDispatch } from 'react-redux';
import { addMyProducts } from '../../store/slices/MyProductSlice';
import { paidGames } from '../model/data';

  export const SplashScreen = () => {
    const [vendors, setvendors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
  
    
    const navigation = useNavigation();
    
  
    const dispatch = useDispatch()

    useEffect(() => {
        const disableBackButton = () => {
          return true;
        };
    
        BackHandler.addEventListener('hardwareBackPress', disableBackButton);
    
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', disableBackButton);
        };
      }, []);
    

    // useEffect(() => {
    //   for (let i = 0; i < paidGames.length; i++){
    //     dispatch(addMyProducts(paidGames[i]))
    //   }
    // },[])
    useEffect(()=> {
  
  
      setTimeout(()=> {
      navigation.navigate(
        'Home'
      )
      },1000)
      
     
    }, []);
    
    return (
      <SafeAreaView style={{alignItems: 'center', flex:1, justifyContent:'center',   backgroundColor: '#FFFED7', }}>
       <Image
        style={{height:300, width:500}}
        resizeMode ='contain'
        source={require('../assets/images/gamehop.png')}
      />
      <View style={{}}>
  <Text style={{color:"#AD40AF", fontSize:20, textAlign:'center', fontWeight:'700', marginTop:20}}>GAMEHOP </Text>
  </View>
      
      </SafeAreaView>
    );
  };
  
  
  