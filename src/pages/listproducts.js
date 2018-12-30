import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon } from 'native-base';
import axios from "axios"

export default class ListProduct extends Component {


    state = {
        products: []
    }
    async componentDidMount() {
        // const products = [
        //     {
        //         id: 1,
        //         name: "Earphone",
        //         price: 20000,
        //         image_url: {uri: 'https://www.jakartanotebook.com/images/products/42/63/30152/2/i7twsi-bluetooth-4.2-earphone-binaural-black-11.jpg'}
        //     },
        //     {
        //         id: 2,
        //         name: "Headset",
        //         price: 50000,
        //         image_url: {uri: 'https://www.astrogaming.com/dw/image/v2/AALZ_PRD/on/demandware.static/-/Sites-masterCatalog_AstroGaming_RP/default/dw48847057/product-images/3AS20-PSW9N-610_primary_2.jpg?sw=720&sh=720&sm=fit'}
        //     },
        //     {
        //         id: 3,
        //         name: "Keybord Gaming",
        //         price: 100000,
        //         image_url: {uri: 'https://multimedia.bbycastatic.ca/multimedia/products/500x500/105/10567/10567347.jpg'}
        //     },
        // ]
        //  this.setState({products})

        const response = await axios.get('http:192.168.0.7:3333/products')
        
        this.setState({ products: response.data })
    }




  render() {
    return (
      <Container>
        <Header>
            <Right>
            </Right>
            <Body>
            <Text>Produk</Text>
            </Body>
            <Left>
                <Icon name='cart'  style={{ alignSelf: 'flex-end', color: '#e0e0e0' }} />
            </Left>
        </Header>
        <Content>
        {this.state.products.map(product=>(
          <List>
            
                <ListItem thumbnail key={product.id}>
                <Left>
                    <Thumbnail square large source={product.image_url} />
                </Left>
                <Body>
                    <Text>{product.name}</Text>
                    <Text>{product.price}</Text>
                </Body>
                <Right>
                    <Button>
                    <Text>Add to Cart</Text>
                    </Button>
                </Right>
                </ListItem>
            
          </List>
          ))}
        </Content>
      </Container>
    );
  }
}