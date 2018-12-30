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

  constructor(props) {
    super(props)
    this.state = {
      segment: 1
    }
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#eeeeee' }}>
        <Header hasSegment>
          <Body>
            <Text style={styles.textHeader}>Keranjang Belanja</Text>
          </Body>
        </Header>
        <Segment>
          <Button first active={this.state.segment === 1} onPress={() => this.setState({ segment: 1 })}>
            <Text>Pembelian</Text>
          </Button>
          <Button active={this.state.segment === 2}  onPress={() => this.setState({ segment: 2 })}>
            <Text>Pembayaran</Text>
          </Button>
          <Button last active={this.state.segment === 3}  onPress={() => this.setState({ segment: 3 })}>
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