/**
 * Created by zhuangsj on 16-12-26.
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Panel
                </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#15A010',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});