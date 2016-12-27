/**
 * Created by zhuangsj on 16-12-26.
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Alert,
} from 'react-native';

import Screen from './screen.js';
import Panel from './panel.js'


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
          expression: [],
            result: []
        };
    }

    calResult(args1,args2,operator) {
        switch (operator) {
            case "+":
                return args1 + args2;
            case '-':
                return args1 - args2;
            case '*':
                return args1*args2;
            default:
                return args1/args2;
        }
    }

    isOperator(args){
        return args=='+' || args=='-' || args=='*' || args=='/';
    }

    handleResult () {
        let newExpression = this.state.expression;
        let newResult;

        let sum =  Number.parseInt(newExpression[0]);
        for (let i=1;i<newExpression.length;i+=2) {
            let args = Number.parseInt(newExpression[i+1]);
            if(!this.isOperator(newExpression[i]) || Number.isNaN(args)) {
                newResult =  'Error';
                break;
            }
            sum += this.calResult(sum,args,newExpression[i]);
        }

        if(!newResult)
            newResult = "result=" + sum;

        this.setState({
            result: newResult
        });
    }

    handlePress (argu) {
        let newExpression = this.state.expression;
        let length = newExpression.length;

        if(length > 0  && this.isOperator(argu) && this.isOperator(newExpression[length-1])) {
            newExpression[length-1] = argu;
        } else {
            newExpression.push(argu);
        }

        this.setState({
            expression: newExpression
        });
    }

    handleDel() {
        var newExpression = this.state.expression;
        if(newExpression.length - 1) {
            newExpression.pop();
        }

        this.setState({
            expression: newExpression,
            result: []
        });
    }

    handleClear() {
        this.setState({
            expression: [],
            result: []
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Screen
                    expression={this.state.expression}
                    result={this.state.result}
                />
                <Panel
                    handlePress={this.handlePress.bind(this)}
                    handleClear={this.handleClear.bind(this)}
                    handleResult={this.handleResult.bind(this)}
                    handleDel={this.handleDel.bind(this)}
                />
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