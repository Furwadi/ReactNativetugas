import React, { Component } from 'react';
import {Text, View } from 'react-native';

import { createBottomTabNavigator, createAppContainer } from  "react-navigation";
import HomeTab from './HomeTab'
import CartTab from './CartTab'
import AkunTab from './AkunTab'
import { Container, Content } from 'native-base';


const TabNavigator = createBottomTabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    CartTab: {
        screen: CartTab
    },
    AkunTab: {
        screen: AkunTab
    },
})

export default createAppContainer(TabNavigator);