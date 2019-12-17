import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
// import Mp4 from ''
import Video from 'react-native-video';

export default class FavoritePage extends Component {
    constructor() {
        super();
        this.state = {
            play: true,
            text: '开始',
        };
    }

    onBuffer() {
        console.log(1);
    }

    videoError() {
        console.error(0);
    }

    onPlayer() {
        this.setState({
            play: !this.state.play,
            text: this.state.play ? '暂停' : '开始',
        });
    }

    render() {
        const {play, text} = this.state;
        // console.log(play);
        return (
            <View style={styles.constructor}>
                <Button
                    title={text}
                    onPress={() => {
                        this.onPlayer();
                    }}/>
                <Video source={{uri: 'http://124.129.157.208:8810/SD/2017qingdao/xiaoxueEnglish/grade3/b/1.mp4'}}
                       rate={1}
                       volume={1}
                       muted={false}
                       paused={play}
                       resizeMode={'cover'}
                       repeat={true}
                       // poster={"https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg?max_age=31536000"}
                       onBuffer={this.onBuffer}
                       onError={this.videoError}
                       style={styles.video}
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
    video: {
        flex: 1,
        zIndex: -1,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    },
});
