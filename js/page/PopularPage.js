import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class PopularPage extends Component {
    render() {
        return (
            <View style={styles.constructor}>
                <Text>PopularPage</Text>
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
