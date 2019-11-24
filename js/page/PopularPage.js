import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

export default class PopularPage extends Component {

    render() {
        const TabNavigator = createAppContainer(
            createMaterialTopTabNavigator({
                PopularTab1: {
                    screen: PopularTab,
                    navigationOptions:{
                        title: 'Tab1'
                    }
                },
                PopularTab2: {
                    screen: PopularTab,
                    navigationOptions:{
                        title: 'Tab2'
                    }
                },
            }),
        );
        return (
            <View style={styles.constructor}>
               <TabNavigator/>
            </View>
        );
    }
}

class PopularTab extends Component {
    render() {
        return (
            <View>
                <Text>PopularTab</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    constructor: {
        flex: 1,
        marginTop: 30
    },
});
