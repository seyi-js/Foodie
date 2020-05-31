/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './PromotionalFoodStyles'

export const PromotionalFood = ( { image, foodSize, foodImages, foodPrices,
    foodDescriptions, text, foodNames, navigate } ) => {
    return (
      
        <TouchableOpacity onPress={ () => navigate( 'FoodDetail', {
            title: text,
            foodDescriptions,
            image,
            foodPrices,
            foodSize,
            foodImages,
            foodNames
        } ) }>
              <View style={ styles.foodCard }>
                    <View>
                        <Image style={styles.foodImage }  source={ image } resizeMode='contain' />
                    </View>
                    <View style={styles.textView}>
                        <Text style={ styles.text }>{ text}</Text>
                    </View>
                </View>
            
            </TouchableOpacity>
      

        
    )
}

export default PromotionalFood
