import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {windowWidth} from '../utils/Dimensions';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addMyProducts} from '../../store/slices/MyProductSlice';
import {
  addMyProductToCart,
  removeMyProductFromCart,
} from '../../store/slices/MyCartSlice';

const CartScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const myCartItems = useSelector(state => state.cart);

  console.log('myCartItems from redux ++=========>', myCartItems);

  const renderItem = ({item, index}) => {
    console.log('render item ================>', item);
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          width: wp(90),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
          }}>
          <Image
            source={item.poster}
            style={{
              width: 55,
              height: 55,
              borderRadius: 10,
              marginRight: 8,
            }}
          />
          <View style={{width: windowWidth - 220}}>
            <Text
              style={{
                color: 'black',

                fontSize: 14,
              }}>
              {item.subtitle}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: 'black',

                fontSize: 14,
                textTransform: 'uppercase',
              }}>
              {item.title}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: 'black',
                fontWeight: '700',
                fontSize: 14,
                textTransform: 'uppercase',
              }}>
              ₹{item.price}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',

            width: 100,
          }}>
          <TouchableOpacity
            style={{
              height: 30,
              backgroundColor: '#AD40AF',
              alignItems: 'center',
              justifyContent: 'center',
              width: 30,
              borderRadius: 10,
            }}
            onPress={() => {
              dispatch(removeMyProductFromCart(item));
            }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
              -
            </Text>
          </TouchableOpacity>
          <Text style={{color: 'black', fontSize: 14, fontWeight: '500'}}>
            {item.qty}
          </Text>
          <TouchableOpacity
            style={{
              height: 30,
              backgroundColor: '#AD40AF',
              alignItems: 'center',
              justifyContent: 'center',
              width: 30,
              borderRadius: 10,
            }}
            onPress={() => {
              dispatch(addMyProductToCart(item));
            }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.v1}>
      <View
        style={{
          backgroundColor: '#fcf1ff',
          flexDirection: 'row',
          alignItems: 'center',
          height: hp(7),
          width: wp(100),
          borderBottomEndRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomWidth: 1,
          borderRightWidth: 1,
          borderLeftWidth: 1,
          borderColor: '#AD40AF',
          paddingHorizontal: 10,
        }}>
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
          <Image
          source={require('../assets/images/back.png')}
          style={{height: 40, width: 40}}
        />
          </TouchableOpacity>
       
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '500',
            paddingLeft: 10,
          }}>
          Cart
        </Text>
      </View>
      {myCartItems.length > 0 ?<FlatList
        data={myCartItems.filter(item => item.qty > 0)}
        // data={myCartItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={{}}
      /> : 
      <View  style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      
      <Image
      
      source={require('../assets/images/emptycart.png')}
      style={{height:400, width:400,}}
      />
      
      </View>
       }

      

      <View
        style={{
          height: hp(27),
          width: wp(100),
          zIndex: 9999,
          backgroundColor: '#fcf1ff',
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
          borderWidth: 1,
          borderColor: '#AD40AF',
          paddingHorizontal: 20,
          paddingTop: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{color: 'black', fontSize: 14}}>Subtotal</Text>

          <Text style={{color: 'black', fontSize: 14}}>
            ₹
            {myCartItems.reduce((accumulator, item) => {
              return accumulator + parseInt(item.price) * parseInt(item.qty);
            }, 0)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{color: 'black', fontSize: 14}}>GST</Text>

          <Text style={{color: 'black', fontSize: 14}}>
            ₹
            {Math.floor(
              0.18 *
                myCartItems.reduce((accumulator, item) => {
                  return (
                    accumulator + parseInt(item.price) * parseInt(item.qty)
                  );
                }, 0),
            )}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{color: 'black', fontSize: 14}}>Order Total</Text>

          <Text style={{color: 'black', fontSize: 14}}>
            ₹
            {myCartItems.reduce((accumulator, item) => {
              return accumulator + parseInt(item.price) * parseInt(item.qty);
            }, 0) +
              Math.floor(
                0.18 *
                  myCartItems.reduce((accumulator, item) => {
                    return (
                      accumulator + parseInt(item.price) * parseInt(item.qty)
                    );
                  }, 0),
              )}
          </Text>
        </View>
         <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#AD40AF',
            height: 40,
            width: '100%',
            borderRadius: 20,
          }}
          disabled={myCartItems.length==0}
          onPress={()=>{
            navigation.navigate("OrderAnimation")
          }}
          >
          <Text style={{color: 'white', fontSize: 20}}> {myCartItems.length>0 ? 'Place Order' : 'No Items' }</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  v1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFED7',
  },
});
