/* eslint-disable prettier/prettier */
import React from 'react'
import { Header, Container,Left, Body,Right, Button, Icon} from 'native-base'
import { Text,StyleSheet, View } from 'react-native'


const CartHeader = ({navigation}) => {
    return (
        
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
          
     
    )
}
const styles = StyleSheet.create( {
    headerStyle: {
        backgroundColor: '#BDBA25',
        
    },

    IconStyle: {
        color: '#fff',
        // textAlign: 'center',

    },

    bodyText: {
        // marginLeft: 80,
        // margin: 'auto',
        fontSize: 21,
        fontStyle: 'italic',
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center'
        // backgroundColor: 'blue'
        
    },

  

    bodyStyle: {
       marginLeft: Platform.OS === 'android' ? 100 : null,
    },
    content: {
        marginTop: 18
    },

    contentText: {
        fontSize: 22,
        color: '#000',
        textAlign: 'center',
        fontWeight: '600'
    },
})
export default CartHeader


