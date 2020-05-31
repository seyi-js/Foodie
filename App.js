/* eslint-disable prettier/prettier */
import React  from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FoodDetail from './components/details/FoodDetailHeader'
import LandingScreen from './components/Landing/LandingScreen'
import Cart from './components/cart/Cart'

const Stack = createStackNavigator();
export const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator headerMode="none" >
      <Stack.Screen name="Home" component={LandingScreen} />
      <Stack.Screen name="FoodDetail" component={FoodDetail} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App
