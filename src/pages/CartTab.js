import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content } from 'native-base';
import { Text, StyleSheet } from 'react-native'

export default class CartTab extends Component {
  static navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({tintColor}) => {
      return <Icon  name="cart" style={{ color: tintColor }}/>
    }
}

  render() {
    return (
      <Container style={{ backgroundColor: '#eeeeee' }}>
        <Header hasSegment>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Text style={styles.textHeader}>Keranjang Belanja</Text>
          </Body>
          <Right>
          </Right>
        </Header>
        <Segment>
          <Button first>
            <Text>Pembelian</Text>
          </Button>
          <Button>
            <Text>Pembayaran</Text>
          </Button>
          <Button >
            <Text>Transaksi Berhasil</Text>
          </Button>
        </Segment>
        <Content padder>
          <Text>Awesome segment</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    color: "#ffffff"
  }
})