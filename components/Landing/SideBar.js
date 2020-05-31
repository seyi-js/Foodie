/* eslint-disable prettier/prettier */
import React from 'react'
import { Container, List, ListItem, Body, Left, Icon } from 'native-base'
import { Text } from 'react-native'
export const SideBar = ({goToBurgers, goToCake,goToPizza,goToShawarma}) => {
    return (
        <Container style={ { backgroundColor: '#fff' } }>
            <List>
                <ListItem itemDivider style={ { backgroundColor: '#f4f4f8' } }>
                    <Text style={ {fontSize: 30 } }>Food</Text>
                </ListItem>
                <ListItem button onPress={goToBurgers} >
                    <Left>
                        <Icon type="MaterialCommunityIcons" name="hamburger" style={ {fontSize: 22, color: '#000'} }/>
                    </Left>
                    <Body>
                        <Text>Burger</Text>
                    </Body>
                        
                </ListItem>
                <ListItem  button onPress={goToPizza} >
                    <Left>
                        <Icon type="MaterialCommunityIcons" name="pizza" style={ {fontSize: 22,color: '#000'} }/>
                    </Left>
                    <Body>
                        <Text>Pizza</Text>
                    </Body>
                        
                </ListItem>
                <ListItem  button onPress={goToCake} >
                    <Left>
                        <Icon type="MaterialCommunityIcons" name="cake" style={ {fontSize: 22,color: '#000'} }/>
                    </Left>
                    <Body>
                        <Text>Cake</Text>
                    </Body>
                        
                </ListItem>
                <ListItem  button onPress={goToShawarma}>
                    <Left>
                        <Icon type="Entypo" name="bowl" style={ {fontSize: 22,color: '#000'} }/>
                    </Left>
                    <Body>
                        <Text>shawarma</Text>
                    </Body>
                        
                </ListItem>

                <ListItem itemDivider style={ { backgroundColor: '#f4f4f4' ,textAlign: 'center' } }>
                <Text style={ {fontSize: 30 } }>Drinks</Text>
            </ListItem>
            <ListItem>
                <Left>
                    <Icon type="Entypo" name="drink" style={ {fontSize: 22,color: '#fff'} }/>
                </Left>
                <Body>
                    <Text>Pepsi</Text>
                </Body>
                    
            </ListItem>
            </List>
        </Container>
    )
}

export default SideBar
