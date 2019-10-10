import React, { Component } from 'react';
import { View,
   Text,
   Dimensions
  } from 'react-native';

  //  expo install expo-av
  
import { Video } from 'expo-av';
import { ScreenOrientation } from 'expo';
import { style18 as styles } from './style-sheet';
import Orientation from 'react-native-orientation'

export default class App extends Component {

    state = {
      width: 0,
      height: 0
    }


  componentDidMount() {
     ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
  }

  onLayout(e) {
    const {width, height} = Dimensions.get('window')
    console.log(width, height)
    this.setState({
      width: width,
      height: height
    })
    
  }
  render () {
    
    return (
      <View onLayout={this.onLayout.bind(this)}>
        <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: this.state.width, height: this.state.height }}
        />
      </View>
    )
  }
}
