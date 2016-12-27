/**
 * Created by zhuangsj on 16-12-26.
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    PixelRatio,
} from 'react-native';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const that = this;
        const items = [
            {name:'CE',operator:'CE'},
            {name:'C',operator:'C'},
            {name:'Del',operator:'Del'},
            {name:'/',operator:'/'},

            {name:'7',operator:'7'},
            {name:'8',operator:'8'},
            {name:'9',operator:'9'},
            {name:'*',operator:'*'},

            {name:'4',operator:'4'},
            {name:'5',operator:'5'},
            {name:'6',operator:'6'},
            {name:'-',operator:'-'},

            {name:'1',operator:'1'},
            {name:'2',operator:'2'},
            {name:'3',operator:'3'},
            {name:'+',operator:'+'},

            {name:'+/-',operator:'+/-'},
            {name:'0',operator:'0'},
            {name:'.',operator:'.'},
            {name:'=',operator:'='},
        ];
        let getBtns = items.map(function (item) {
            switch (item.name) {
                case 'CE ':
                case 'C':
                    return (
                        <TouchableHighlight
                            key={item.name}
                            style={[styles.btn]}
                            underlayColor="#E0E0E0"
                            onPress={that.props.handleClear}>
                            <Text style={[styles.btn_font, styles.btn_font_red]}>{item.name}</Text>
                        </TouchableHighlight>
                    );
                case 'Del':
                    return (
                        <TouchableHighlight
                            key={item.name}
                            style={[styles.btn]}
                            underlayColor="#E0E0E0"
                            onPress={that.props.handleDel}>
                            <Text style={[styles.btn_font, styles.btn_font_red]}>{item.name}</Text>
                        </TouchableHighlight>
                    );
                case '=':
                    return (
                        <TouchableHighlight
                            key={item.name}
                            style={[styles.btn]}
                            underlayColor="#E0E0E0"
                            onPress={that.props.handleResult.bind(that,item.operator)}>
                            <Text style={[styles.btn_font, styles.btn_font_red]}>{item.name}</Text>
                        </TouchableHighlight>
                    );
                default :
                    return (
                        <TouchableHighlight
                            key={item.name}
                            style={[styles.btn]}
                            underlayColor="#E0E0E0"
                            onPress={that.props.handlePress.bind(that,item.operator)}>
                            <Text style={[styles.btn_font, styles.btn_font_red]}>{item.name}</Text>
                        </TouchableHighlight>
                    );
            }
        });
        return (
            <View style={styles.container}>
                <View style={styles.line}>
                    {getBtns.slice(0,4)}
                </View>
                <View style={styles.line}>
                    {getBtns.slice(4,8)}
                </View>
                <View style={styles.line}>
                    {getBtns.slice(8,12)}
                </View>
                <View style={styles.line}>
                    {getBtns.slice(12,16)}
                </View>
                <View style={styles.line}>
                    {getBtns.slice(16,20)}
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 7,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#15A010',
    },
    line: {
        flex: 1,
        flexDirection: 'row',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderColor: '#D6DAD4',
        borderWidth: 2,
        backgroundColor: '#FAFBFC',
    },

    btn_font: {
        fontSize: 16,
    },
    btn_font_red: {
        color: 'red',
    },
});