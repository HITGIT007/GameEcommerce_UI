import React, {useState} from 'react';
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

import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';
import BannerSlider from '../components/BannerSlider';

import {freeGames, paidGames, sliderData} from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
//import ListItem from '../components/ListItem';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {windowWidth} from '../utils/Dimensions';

const Home = ({navigation}) => {
  const [gamesTab, setGamesTab] = useState(1);
  const [bottomCart, setBottomCart] = useState(false);
  const [plusMinus, setPlusMinus] = useState('')
  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };


  const renderItem = ({item, index}) => {
    console.log('render item ================>',item)
    return(
<View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20,
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
                </View>
              </View>

                    {plusMinus == item.id  ? <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',
                    
                  width:100
                  
                    
                  
                  
                  
                  }}>
                      <TouchableOpacity
                      
                      style={{height: 30, backgroundColor:"#AD40AF", alignItems:"center", justifyContent:"center",width:30, borderRadius:10}}
                      
                      ><Text style={{color:"black", fontSize:20, fontWeight:"700"}}>-</Text></TouchableOpacity>
                      <Text style={{color:"black", fontSize:14, fontWeight:"500"}}>1</Text>
                      <TouchableOpacity
                      
                      
                      style={{height: 30, backgroundColor:"#AD40AF", alignItems:"center", justifyContent:"center",width:30, borderRadius:10}}
                      ><Text style={{color:"black", fontSize:20, fontWeight:"700"}}>+</Text></TouchableOpacity>
                    </View> :  <TouchableOpacity
                style={{
                  backgroundColor: '#0aada8',
                  padding: 10,
                  width: 100,
                  borderRadius: 10,
                }}
                onPress={() => {
                  item.isFree == 'No' && setBottomCart(true) ;
                  setPlusMinus(item.id) 
                }}>
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 14,
                  }}>
                  {item.isFree == 'Yes' && 'Play'}
                  {item.isFree == 'No' && item.price}
                </Text>
              </TouchableOpacity>}



             
            </View>
    )
  }

  return (
    <SafeAreaView style={styles.sfav}>
      <ScrollView style={{padding: 20}}>
        <View style={styles.v1}>
          <Text style={styles.t1}>Hello Hit Gamer</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ImageBackground
              source={require('../assets/images/user-profile.jpg')}
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.v2}>
          <Feather
            name="search"
            size={25}
            color="#C6C6C6"
            style={{marginLeft: 5}}
          />
          <TextInput style={{fontSize: 20}} placeholder="Search" />
        </View>
        <View style={styles.v3}>
          <Text style={styles.t2}>Upcoming Games</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>See all</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />
        <View style={{marginVertical: 20}}>
          <CustomSwitch
            selectionMode={1}
            option1="Paid Games"
            option2="Free To Play"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        <FlatList
          data={gamesTab == 1 ? paidGames : freeGames}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />

        {/* {gamesTab == 2 && 
         <FlatList
         data={freeGames}
         keyExtractor={item => item.id}
         renderItem={
           
          <View style={{ flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,}}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
          }}>
            <Image
              source={photo}
              style={{ width: 55,
                height: 55,
                borderRadius: 10,
                marginRight: 8,}}
            />
            <View style={{width: windowWidth - 220}}>
              <Text style={{color: 'black',

fontSize: 14,}}>{subTitle}</Text>
              <Text numberOfLines={1} style={{ color: 'black',

fontSize: 14,
textTransform: 'uppercase',}}>{title}</Text>
            </View>
          </View>
    
          <TouchableOpacity style={{backgroundColor: '#0aada8',
    padding: 10,
    width: 100,
    borderRadius: 10,}}
          
          onPress={() =>{
            isFree == 'No' &&  setBottomCart(true);
          }}
          >
            <Text style={{ color: '#fff',
    textAlign: 'center',

    fontSize: 14,}}>
              {isFree == 'Yes' && 'Play'}
              {isFree == 'No' && price}
    
            </Text>
          </TouchableOpacity>
        </View>
        
        
        
        
        
        }
            
            />} */}
      </ScrollView>
      {gamesTab == 1 && bottomCart == true && (
        <View
          style={{
            position: 'absolute',
            width: wp(100),
            bottom: 0,
            height: 60,
            backgroundColor: '#AD40AF',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{color: 'white', fontWeight: '500', fontSize: 14}}>
              Items Added (1)
            </Text>
            <Text style={{color: 'white', fontWeight: '500', fontSize: 14}}>
              ₹5000
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: 60,
              backgroundColor: 'yellow',
              flexDirection: 'row',
              height: 40,
              width: 80,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text style={{color: 'black'}}>View Cart</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  sfav: {
    flex: 1,
    backgroundColor: '#FFFF00',
  },
  v1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  t1: {
    fontSize: 20,
    color: '#AD40AF',
    fontFamily: 'BeVietnamPro-ExtraBoldItalic',
  },
  v2: {
    flexDirection: 'row',
    borderColor: '#C6C6C6',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
  },
  v3: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  t2: {fontSize: 18, fontWeight: 'bold', color: 'black'},
});
//ScrollView renders all its react child components at once,
//but this has a performance downside.
//FlatList renders items lazily, when they are about to appear, and removes items that
//scroll way off screen to save memory and processing time.
