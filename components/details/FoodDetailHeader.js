/* eslint-disable prettier/prettier */
import React from 'react'
import { Header, Container,Left, Body,Right, Button, Icon} from 'native-base'
import { Text, View } from 'react-native'
import styles from './FoodDetailsStyles'
import FoodItems from './FoodItems'

export const FoodDetail = ({route,navigation}) => {
  
  
    const {title,foodPrices,
      foodSize,
      foodImages,
      foodNames, foodDescriptions} = route.params
   
 
    return (
        
      <Container>
      <Header  style={styles.headerStyle}>
      <Left>
        <Button transparent onPress={ ()=> navigation.goBack()}>
          <Icon type="ionicon" name="md-arrow-back"  style={styles.IconStyle}/>
        </Button>
      </Left>

      <Body style={styles.bodyStyle} >
        <Text style={styles.bodyText}>Foodie </Text>
      </Body>

      <Right>
        <Button transparent onPress={ () => navigation.navigate('Cart')}>
          <Icon type="FontAwesome5" name='shopping-cart'  style={styles.IconStyle} />
        </Button>
      </Right>
        </Header>
        <FoodItems title={ title } 
          foodDescriptions={ foodDescriptions }
          foodImages={ foodImages }
          foodPrices={ foodPrices }
          foodSize={foodSize}
          foodNames={ foodNames } />
    </Container>    
        
    )
}

export default FoodDetail