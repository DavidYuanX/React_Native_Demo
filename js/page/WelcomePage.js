import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import NavigationUtil from '../naviartor/NavigationUtil';

export default class WelcomePage extends Component {
    componentDidMount() {
        this.timer = setTimeout(() => {
            NavigationUtil.resetToHomPage(this.props)
        }, 200);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={styles.constructor}>
                <Text>WelcomePage</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    constructor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
