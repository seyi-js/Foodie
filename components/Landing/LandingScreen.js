/* eslint-disable prettier/prettier */
import React, { Fragment, Component } from 'react'
import { ScrollView } from 'react-native'
import {Drawer} from 'native-base'
import HeaderLanding from './header/HeaderLanding'
import PromotionalFood from './promoFood/PromotionalFood'
import SideBar from './SideBar'
let Burger = require('../../images/burger.jpg')
let Cake = require('../../images/cake.jpg')
let Pizza = require('../../images/pizza2.jpg')
let Shawarma = require('../../images/shawama.jpg')
export default class LandingScreen extends Component{

   closeDrawer = () => {
    this.drawer._root.close();
  }

  openDrawer = () => {
   this.drawer._root.open()
  }

  goToBurgers = () => {
    this.props.navigation.navigate( 'FoodDetail', {
      image:Burger,
               foodNames: ['Fola Burger', 'Spicy Burger',
                 'Lino Burger', 'Chino Burger' ],
               foodDescriptions: [ 'An Awesome Fola Burger',
                 'An Awesome Spicy Burger', 'An Awesome Lino Burger',
                 'An Awesome Chino Burger' ],
               foodPrices: [ 500, 700, 400, 1000 ] ,
               foodImages: [ Burger, Pizza, Shawarma, Cake ] ,
               foodSize:4,
          text:'BURGERS'
    } )
    this.closeDrawer();
  }

  goToCake = () => {
    this.props.navigation.navigate( 'FoodDetail', {
      image:Cake,
               foodNames: ['Fola Cake', 'Spicy Cake',
                 'Lino Cake', 'Chino Cake' ],
               foodDescriptions: [ 'An Awesome Fola Cake',
                 'An Awesome Spicy Cake', 'An Awesome Lino Cake',
                 'An Awesome Chino Cake' ],
               foodPrices: [ 500, 700, 400, 1000 ] ,
               foodImages: [ Burger, Pizza, Shawarma, Cake ] ,
               foodSize:4,
          text:'Cakes'
    } )
    this.closeDrawer();
  }

  goToPizza = () => {
    this.props.navigation.navigate( 'FoodDetail', {
      image:Pizza,
               foodNames: ['Fola Pizza', 'Spicy Pizza',
                 'Lino Pizza', 'Chino Pizza' ],
               foodDescriptions: [ 'An Awesome Fola Pizza',
                 'An Awesome Spicy Pizza', 'An Awesome Lino Pizza',
                 'An Awesome Chino Pizza' ],
               foodPrices: [ 500, 700, 400, 1000 ] ,
               foodImages: [ Burger, Pizza, Shawarma, Cake ] ,
               foodSize:4,
          text:'Pizza'
    } )
    this.closeDrawer();
  }
  goToShawarma = () => {
    this.props.navigation.navigate( 'FoodDetail', {
      image:Shawarma,
               foodNames: ['Fola Shawarma', 'Spicy Shawarma',
                 'Lino Shawarma', 'Chino Shawarma' ],
               foodDescriptions: [ 'An Awesome Fola Shawarma',
                 'An Awesome Spicy Shawarma', 'An Awesome Lino Shawarma',
                 'An Awesome Chino Shawarma' ],
               foodPrices: [ 500, 700, 400, 1000 ] ,
               foodImages: [ Burger, Pizza, Shawarma, Cake ] ,
               foodSize:4,
          text:'Shawarma'
    } )
    this.closeDrawer();
  }
  render() {

    const { navigate } = this.props.navigation;
     return (
    <Drawer
      ref={ ( ref ) => { this.drawer = ref; } }
         content={
          
           <SideBar
           goToBurgers = {this.goToBurgers }
           goToCake={ this.goToCake }
           goToPizza={this.goToPizza}
           goToShawarma={this.goToShawarma}
        />
      }
      onClose={()=>this.closeDrawer()}
    >
    <Fragment>
      <HeaderLanding openDrawer={this.openDrawer} navigate={ navigate } />
      <ScrollView style={{backgroundColor: '#f8f8f8'}}>
             <PromotionalFood 
               navigate={ navigate }
               image={Burger}
               foodNames={ ['Fola Burger', 'Spicy Burger',
                 'Lino Burger', 'Chino Burger' ] }
               foodDescriptions={ [ 'An Awesome Fola Burger',
                 'An Awesome Spicy Burger', 'An Awesome Lino Burger',
                 'An Awesome Chino Burger' ] }
               foodPrices={ [ 500, 700, 400, 1000 ] }
               foodImages={ [ Burger, Pizza, Shawarma, Cake ] }
               foodSize={4}
          text={'BURGERS'}
        />
             <PromotionalFood image={ Cake }
               navigate={ navigate }
               
               foodNames={ ['Fola Cake', 'Spicy Cake',
                 'Lino Burger', 'Chino Cake' ] }
               foodDescriptions={ [ 'An Awesome Fola Cake',
                 'An Awesome Spicy Cake', 'An Awesome Lino Cake',
                 'An Awesome Chino Cake' ] }
               foodPrices={ [ 500, 700, 400, 1000 ] }
               foodImages={ [ Burger, Pizza, Shawarma, Cake ] }
               foodSize={4}
          text={'Cakes'}
        />
             <PromotionalFood image={ Pizza }
               navigate={ navigate }
               foodNames={ ['Fola Pizza', 'Spicy Pizza',
               'Lino Burger', 'Chino Pizza' ] }
             foodDescriptions={ [ 'An Awesome Fola Pizza',
               'An Awesome Spicy Pizza', 'An Awesome Lino Pizza',
               'An Awesome Chino Pizza' ] }
             foodPrices={ [ 500, 700, 400, 1000 ] }
             foodImages={ [ Burger, Pizza, Shawarma, Cake ] }
             foodSize={4}
          text={'Pizza'}
        />
             <PromotionalFood image={ Shawarma }
               navigate={ navigate }
               foodNames={ ['Fola Shawarma', 'Spicy Shawarma',
               'Lino Burger', 'Chino Shawarma' ] }
             foodDescriptions={ [ 'An Awesome Fola Shawarma',
               'An Awesome Spicy Shawarma', 'An Awesome Lino Shawarma',
               'An Awesome Chino Shawarma' ] }
             foodPrices={ [ 500, 700, 400, 1000 ] }
             foodImages={ [ Burger, Pizza, Shawarma, Cake ] }
             foodSize={4}
          text={'Shawarma'}
        />
    
      </ScrollView>
     
      </Fragment>
      </Drawer>
  )
  }
 
}

