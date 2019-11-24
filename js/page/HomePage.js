import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import DynamicTabNavigator from '../naviartor/DynamicTabNavigator';
import NavigationUtil from '../naviartor/NavigationUtil';

export default class HomePage extends Component {
    render() {
        NavigationUtil.navigation = this.props.navigation;
        return <DynamicTabNavigator/>;
    }
}
const styles = StyleSheet.create({
    constructor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
