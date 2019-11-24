import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class TrendingPage extends Component {
    render() {
        return (
            <View style={styles.constructor}>
                <Text>TrendingPage</Text>
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
