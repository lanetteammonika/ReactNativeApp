import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Swiper from 'react-native-swiper';
import Slide1 from '../layout/Slide1';
import Slide2 from '../layout/Slide2';
import Slide3 from '../layout/Slide3';

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})

export default class AppIntroContainer extends Component {
    static navigationOptions = {
        header: null,
    };
    render(){
        if (__DEV__) {
            console.log('debug');
        } else {
            console.log('release');
        }
        return (
            <Swiper
                    dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                    activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                    paginationStyle={{
                        bottom: 70
                    }}
                    loop={false}>
                <Slide1 slideStyle={styles.slide1} textStyle={styles.text}/>
                <Slide2 slideStyle={styles.slide2} textStyle={styles.text}/>
                <Slide3 slideStyle={styles.slide3} textStyle={styles.text}/>
            </Swiper>
        );
    }
}