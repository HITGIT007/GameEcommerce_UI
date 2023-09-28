import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CartScreen = () => {
    return (
        <View style={styles.v1}>
            <Text>Cart</Text>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    v1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
