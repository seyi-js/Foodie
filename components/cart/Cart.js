/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Container,Content, Text } from 'native-base'
import CartHeader from './CartHeader'
import CartItem from './CartItem'
const Cart = ({navigation}) => {
    return (
        <View >
            <CartHeader navigation={ navigation } />
            <View style={styles.parentView}>
                <Content style={ styles.Content }>
                    <CartItem/> 
                   
                </Content>
                <View style={ styles.footerView } >
                    <Text style={styles.footerText}>Total: NGN1500</Text>
                </View>
               
            </View>
        </View>  
        
    )
}
const styles = StyleSheet.create( {
    parentView: {
        height: '100%',
        width: '100%',
        // backgroundColor: 'red'
    },

    footerView: {
        height: '35%',
        width: '100%',
        backgroundColor: '#BDBA25',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },

    footerText: {
        width: '100%',
        textAlign: 'center',
        color: '#fff',
        fontSize: 24,
        marginTop: 5,

    }
})
export default Cart


