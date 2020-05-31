import { StyleSheet, Dimensions } from 'react-native'

let Height = Dimensions.get( 'window' ).height;
export default StyleSheet.create( {
    foodCard: {
        height: Height / 2,
        alignItems: "center"
    },

    foodImage: {
        height: '100%'
    },
    textView: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    text: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'orange',
        marginLeft: '20%',
        marginRight: '20%',
        borderRadius: 10,
        paddingTop: '5%',
        paddingBottom: '5%',
        
    }
})