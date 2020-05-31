/* eslint-disable prettier/prettier */
import { StyleSheet, Platform } from 'react-native'


export default StyleSheet.create( {
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