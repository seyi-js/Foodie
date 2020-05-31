/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, ListView,  View,} from 'react-native'
import { SwipeRow,  ListItem, List,Text, Icon, Button } from 'native-base';
const CartItem = () => {
    return (
        <View  style={styles.CartItem}>
            <SwipeRow
            disableRightSwipe
            rightOpenValue={-100}
            
            body={
            <View>
                <Text>SwipeRow Body Text</Text>
            </View>
            }
            right={
            <Button danger onPress={() => alert('Trash')}>
                <Icon active name="trash" />
            </Button>
            }
            />
        </View>
    )
}


const styles = StyleSheet.create( {
    CartItem: {
        width: '100%',
        // backgroundColor: 'blue',
        height: 150
    }
})
export default CartItem


