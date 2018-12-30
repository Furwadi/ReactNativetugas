import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class AkunTab extends Component {
  static navigationOptions = {
    tabBarLabel: 'Akun',
    tabBarIcon: ({tintColor}) => {
      return <Icon  name="person" style={{ color: tintColor }}/>
    }
}

  render() {
    return (
      <Container style={{ backgroundColor: '#eeeeee' }}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Akun</Title>
          </Body>
          <Right/>
        </Header>
      </Container>
    );
  }
}