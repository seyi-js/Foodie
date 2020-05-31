/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet,Dimensions ,Image, Text, View, TouchableOpacity } from 'react-native'
let Height = Dimensions.get( 'window' ).height;
let width = Dimensions.get( 'window' ).width;

let scale = Height/width
const Foods = ({image, title, price, description}) => {
    return (
        <TouchableOpacity onPress={ () => alert( 'foods' ) }>
            <View style={ styles.foodsView }>
                <View style={ styles.priceView }>
                    <Text style={ styles.priceText } >NGN{price }</Text>
                </View>
                <View style={ styles.foodImage } >
                    <Image style={ styles.img } source={ image } resizeMode={'contain' }/>
                </View>
                <View style={ styles.description } >
                    <View style={styles.textView}>
                    <Text style={ styles.foodTitle}>  {title} </Text>
                        <Text style={ styles.foodDescription }>{ description}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
} 

const styles = StyleSheet.create( {
    foodsView: {
        width: '100%',
        height: Height / 4,
        // backgroundColor: 'orange',
        paddingLeft: '5%',
        paddingTop: '5%',
        
    },

    priceView: {
        backgroundColor: '#BDBA25',
        height: '30%',
        width: '40%',
        borderRadius: 10,
        justifyContent: 'center',
        zIndex: 5
    },

    priceText: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center'
    },
    foodImage: {
        width: '60%',
        height: '70%',
        position: 'absolute',
        paddingTop: '5%'
       
    },

    img: {
        width: '100%',
        height: '100%',
        borderRadius: 40
    },
    description: {
        height: '60%',
        width: '60%',
        backgroundColor: '#f4f4f8',
        borderRadius: 10,
        position: "absolute",
        zIndex: -1,
        marginLeft: '40%',
        marginTop: '5%'
    },
    textView: {
        position: 'absolute',
        width: '50%',
        height: '100%',
        // backgroundColor: 'green',
        zIndex: 1,
        marginLeft: '40%'
    },

    foodTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 5
    },

    foodDescription: {
        textAlign: 'center',
        fontWeight: '400',
        paddingTop: 5,
        fontSize: scale*10
    },

})

export default Foods
