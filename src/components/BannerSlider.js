import React from 'react'
import { StyleSheet, Text,Image, View } from 'react-native'


const BannerSlider = ({data}) => {
    return (
        <View>
        <Image source={data.image} 
        style={{width:300, height:150, 
        borderRadius:10}}/>
        </View>
    )
}

export default BannerSlider

const styles = StyleSheet.create({})
