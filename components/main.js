/**
 * Created by zhuangsj on 16-12-26.
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import Screen from './screen.js';
import Panel from './panel.js'


export default class extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <Screen />
                <Panel />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
});