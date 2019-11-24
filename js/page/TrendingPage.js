import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import NavigationUtil from '../naviartor/NavigationUtil';

export default class TrendingPage extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.constructor}>
                <Text>TrendingPage</Text>
                <Button
                    title={'修改主题'}
                    onPress={() => navigation.setParams(
                        {
                            theme: {
                                tintColor: 'red',
                                updateTime: new Date().getTime(),
                            },
                        },
                    )}
                />
                <Button
                    title={'详情页'}
                    onPress={() => NavigationUtil.goPage({},'DetaiPage')}
                />
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
