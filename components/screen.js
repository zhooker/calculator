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

    getExpression() {
        return this.props.expression;
    }

    getResult() {
        return this.props.result;
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.expression}>
                    <Text style={styles.expression_font}>
                        {this.getExpression()}
                    </Text>
                </View>

                <View style={styles.result}>
                    <Text style={styles.result_font}>
                        {this.getResult()}
                    </Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#F5A000',
    },
    expression: {
        flex: 1,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 35,
        marginBottom: 10,
        paddingTop: 15,
    },
    result: {
        flex: 1,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        marginBottom: 20,
    },
    expression_font: {
        fontSize: 20,
        textAlign: 'right',
        color: '#64676A',
    },
    result_font: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#3D4044',
        textAlign: 'right',
        fontFamily: 'Arial',
    },
});