import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

export default class PopularPage extends Component {
    constructor(props) {
        super(props);
        this.tabNames = ['Java', 'Android', 'iOS', 'React', 'React Native', 'PHP'];
    }

    _getTabs() {
        const tabs = {};
        this.tabNames.forEach((item, index) => {
            tabs[`tab${index}`] = {
                screen: props => <PopularTab {...this.props} tabLabel={item}/>,
                navigationOptions: {
                    title: item,
                },
            };
        });
        return tabs;
    }

    render() {
        const TabNavigator = createAppContainer(
            createMaterialTopTabNavigator(
                this._getTabs(),
                {
                    tabBarOptions:{
                        tabStyle:styles.tabStyle,
                        upperCaseLabel:false,
                        scrollEnabled: true,
                        style:{
                            backgroundColor: 'blue'
                        },
                        indicatorStyle:styles.indicatorStyle,
                        labelStyle:styles.labelStyle
                    }
                }
            ),
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
        marginTop: 30,
    },
    tabStyle:{
        minWidth:50
    },
    indicatorStyle:{
        height:2,
        backgroundColor: 'white'
    },
    labelStyle:{
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
    }
});
