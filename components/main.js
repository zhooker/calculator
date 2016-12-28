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
        console.log("111 calResult=" + args1 +","+args2+","+operator);
        switch (operator) {
            case '+':
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

        let operators = [],number = '';
        for (let i=0;i<newExpression.length;i++) {
            console.log("number=" + number +"," + newExpression[i]);
            if(newExpression[i] >= '0' && newExpression[i] <= '9')
                number+=newExpression[i];
            else {
                operators.push(number);
                operators.push(newExpression[i]);
                number = '';
            }
        }
        if(number)
            operators.push(number);

        console.log("111 operators=" + operators);

        for (let i=0;i<operators.length;i++) {
            if(operators[i] == '*' || operators[i] == '/') {
                if (i <= 0 || i >= operators.length) {
                    newResult = 'Error';
                    break;
                }
                let arg1 = Number.parseInt(operators[i-1]);
                let arg2 = Number.parseInt(operators[i+1]);

                if(Number.isNaN(arg1) || Number.isNaN(arg2)) {
                    newResult = 'Error';
                    break;
                }

                let result = this.calResult(arg1,arg2,operators[i]);
                operators[i-1] = result;
                operators.splice(i,2);
                i++;
            }
        }

        console.log("222 operators=" + operators);

        let sum =  Number.parseInt(operators[0]);
        if(operators.length > 2) {
            for (let i=1;i<operators.length;i+=2) {
                if(this.isOperator(operators[i])) {
                    let arg = Number.parseInt(operators[i+1]);
                    sum =  this.calResult(sum,arg,operators[i]);
                    console.log("111 sum=" + sum +"," +arg);
                } else {
                    newResult = 'Error';
                    break;
                }
            }
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