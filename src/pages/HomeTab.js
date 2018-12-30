import React, { Component } from 'react';
import { Container, Header, Content, Grid, Col, Row, Footer, FooterTab, Button, Icon, Text, Item, Input, CardItem } from 'native-base';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import SlideShow from './Slider'

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({tintColor}) => {
      return <Icon  name="home" style={{ color: tintColor }}/>
    }
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#eeeeee' }}>
        <Header >
        <View style={{flex:1,justifyContent:'center',marginTop:10}}>
            <Item style={{backgroundColor:'white',borderRadius:20,paddingLeft:10,height:35}}>
              <Icon name="ios-search" style={{color:'#febc00'}} />
              <Input placeholder="Search" placeholderTextColor='#CBC9C9'/>
              
            </Item>
          </View>
        </Header>
        
        <Content style={{ flex:1 }}>
        <SlideShow/>
        <Grid>
            <Col style={{  height: 250, borderRadius:10, margin:5, justifyContent:'space-between', backgroundColor:'#ffffff' }}>
              <Image  source={require('../../images/products/earphone1.jpg')} style={{height:170,width:170,borderTopLeftRadius:10,borderTopRightRadius:10,alignSelf:'center'}}/>
              <Text style={{ fontSize:14, color:"#414142" }}>
                  Earphone Smartphone Terbaru
              </Text>
              <Text style={{ fontSize:20, fontWeight:"100",color:'#c30f42'  }}>
                  Rp30.000
              </Text>
              
                <Button style={{ alignSelf:'center', height:20, backgroundColor:'#74b94e' }}>
                  <Text>Add to Cart</Text>
                </Button>
              
            </Col>
            <Col style={{  height: 250, borderRadius:10, margin:5, justifyContent:'space-between', backgroundColor:'#ffffff' }}>
              <Image  source={require('../../images/products/hijab1.jpg')} style={{height:170,width:170,borderTopLeftRadius:10,borderTopRightRadius:10,alignSelf:'center'}}/>
              <Text style={{ fontSize:14, color:"#414142" }}>
                  Hijab Syariah Murah
              </Text>
              <Text style={{ fontSize:20, fontWeight:"100",color:'#c30f42'  }}>
                  Rp34.000
              </Text>
              
                <Button style={{ alignSelf:'center', height:20, backgroundColor:'#74b94e' }}>
                  <Text>Add to Cart</Text>
                </Button>
              
            </Col>
        </Grid>
        <Grid>
        <Col style={{  height: 250, borderRadius:10, margin:5, justifyContent:'space-between', backgroundColor:'#ffffff' }}>
              <Image  source={require('../../images/products/jam1.jpg')} style={{height:170,width:170,borderTopLeftRadius:10,borderTopRightRadius:10,alignSelf:'center'}}/>
              <Text style={{ fontSize:14, color:"#414142" }}>
                  Jam Import Asli
              </Text>
              <Text style={{ fontSize:20, fontWeight:"100",color:'#c30f42'  }}>
                  Rp100.000
              </Text>
              
                <Button style={{ alignSelf:'center', height:20, backgroundColor:'#74b94e' }}>
                  <Text>Add to Cart</Text>
                </Button>
              
            </Col><Col style={{  height: 250, borderRadius:10, margin:5, justifyContent:'space-between', backgroundColor:'#ffffff' }}>
              <Image  source={require('../../images/products/kacamata1.jpg')} style={{height:170,width:170,borderTopLeftRadius:10,borderTopRightRadius:10,alignSelf:'center'}}/>
              <Text style={{ fontSize:14, color:"#414142" }}>
                  Kacamata Korea Oppa
              </Text>
              <Text style={{ fontSize:20, fontWeight:"100",color:'#c30f42'  }}>
                  Rp170.000
              </Text>
              
                <Button style={{ alignSelf:'center', height:20, backgroundColor:'#74b94e' }}>
                  <Text>Add to Cart</Text>
                </Button>
              
            </Col>
        </Grid>
        <Grid>
        <Col style={{  height: 250, borderRadius:10, margin:5, justifyContent:'space-between', backgroundColor:'#ffffff' }}>
              <Image  source={require('../../images/products/laptop.jpg')} style={{height:170,width:170,borderTopLeftRadius:10,borderTopRightRadius:10,alignSelf:'center'}}/>
              <Text style={{ fontSize:14, color:"#414142" }}>
                  Asus X504ZA
              </Text>
              <Text style={{ fontSize:20, fontWeight:"100",color:'#c30f42'  }}>
                  Rp8.700.000
              </Text>
              
                <Button style={{ alignSelf:'center', height:20, backgroundColor:'#74b94e' }}>
                  <Text>Add to Cart</Text>
                </Button>
              
            </Col><Col style={{  height: 250, borderRadius:10, margin:5, justifyContent:'space-between', backgroundColor:'#ffffff' }}>
              <Image  source={require('../../images/products/powerbank1.jpg')} style={{height:170,width:170,borderTopLeftRadius:10,borderTopRightRadius:10,alignSelf:'center'}}/>
              <Text style={{ fontSize:14, color:"#414142" }}>
                  Powerbank 1000mA
              </Text>
              <Text style={{ fontSize:20, fontWeight:"100",color:'#c30f42'  }}>
                  Rp30.000
              </Text>
              
                <Button style={{ alignSelf:'center', height:20, backgroundColor:'#74b94e' }}>
                  <Text>Add to Cart</Text>
                </Button>
              
            </Col>
        </Grid>
         
         
        </Content>
    
      </Container>
    );
  }
}


const styles = StyleSheet.create({
    textTab: {
      fontSize: 9
    }
})