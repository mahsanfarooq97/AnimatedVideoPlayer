/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import VideoPlayer from './Component/VideoPlayer/VideoPlayer';


const App = () => {
  const [playVideo,setplayVideo] = useState(null)
  return (
    <SafeAreaView style={styles.container}>
    <VideoPlayer
            playVideo={playVideo}
            closeVideo={() => {
              setplayVideo(false)
            }}
            videoLink={playVideo}
    />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
flex:1,
justifyContent:'center',alignItems:'center'
  },
});

export default App;
