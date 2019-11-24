import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class DetaiPage extends Component {
    render() {
        return (
            <View style={styles.constructor}>
                <Text>DetaiPage</Text>
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
