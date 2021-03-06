import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window')
const Slider = props => (
    <View style={styles.container}>
        <Image style={styles.image} source={props.uri} />
    </View>
)
const styles = {
    container: {
        flex: 1,
        justifyContents: 'center'
    },
    image: {
        flex: 1,
        width
    }
}
export default class extends Component {
    constructor(props){
        super(props)[
            this.state = {
                ImageSlider : [
                    require('../../images/bukalapak/bukalapak.jpg'),
                    require('../../images/bukalapak/bukalapak1.jpg'),
                    require('../../images/bukalapak/bukalapak2.jpg'),
                    require('../../images/bukalapak/bukalapak4.jpg')
                ]
            
        }
    ]
    }
    render(){
        return(
            <View>
                <Swiper
                autoplay
                height= {160}
                >
                {
                    this.state.ImageSlider.map((item,i) => <Slider uri={item} key={i} /> )
                }

                </Swiper>
            </View>
        )
    }
}