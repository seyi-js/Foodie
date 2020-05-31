/* eslint-disable prettier/prettier */
import React from 'react'
import { Content, Container } from 'native-base'
import {Text, View} from 'react-native'
import styles from './FoodDetailsStyles'
import Foods from './Foods'
export const FoodItems = ({foodPrices,title,
    foodSize,
    foodImages,
    foodNames, foodDescriptions}) => {
    var foodItems = [];

    for ( let i = 0; i < foodSize; i++ ){
        foodItems.push(
            <View>
                <Foods key={i}
                    title={ foodNames[ i ] }
                    image={foodImages[i]}
                    price={foodPrices[i]}
                    description={foodDescriptions[i]}
                />
            </View>
        )
    }
    
    return (
        <Container>
        <Content style={styles.content}>
                <Text style={ styles.contentText }>{ title }</Text>

                {foodItems}
                
        </Content>
        </Container>
    )
}


export default FoodItems