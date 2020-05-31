/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, View } from 'react-native'
import styles from './HeaderLandingStyles'
import { Header, Container,Left, Body,Right, Button, Icon} from 'native-base'
export const HeaderLanding = ({openDrawer, navigate }) => {
  return (
    
      <Header  style={styles.headerStyle}>
        <Left>
          <Button transparent onPress={ ()=>openDrawer() }>
            <Icon name="ios-menu"  style={styles.IconStyle}/>
          </Button>
        </Left>

        <Body style={styles.bodyStyle} >
          <Text style={styles.bodyText}>Foodie </Text>
        </Body>

        <Right>
          <Button transparent onPress={ () => navigate('Cart', {navigate})}>
            <Icon type="FontAwesome5" name='shopping-cart'  style={styles.IconStyle} />
          </Button>
        </Right>
      </Header>
     
  )
}

export default HeaderLanding
