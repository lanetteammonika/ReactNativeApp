import React from 'react';
import {Text, View} from "react-native";

const Slide1 = (props) => {
    return (
        <View style={props.slideStyle}>
            <Text style={props.textStyle}>Hello Swiper</Text>
        </View>
    )
};
export default Slide1;