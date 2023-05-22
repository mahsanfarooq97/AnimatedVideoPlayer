import React, {useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Video from 'react-native-video';

const VideoPlayer = ({playVideo, videoLink, closeVideo, type = false}) => {
  const [opacity, setOpacity] = useState(0);
  const onLoadStart = () => {
    setOpacity(1);
  };
  const onLoad = () => {
    setOpacity(0);
  };
  const onBuffer = ({isBuffering}) => {
    setOpacity(isBuffering ? 1 : 0);
  };

  return (
    playVideo && (
      <Animatable.View style={Styles.Backdrop}>
        {type !== 'chatPlayer' && (
          <View
            style={{
              width: '100%',
              height: '5%',
              marginTop: responsiveHeight(5),
              paddingRight: responsiveWidth(4),
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity onPress={closeVideo}>
              <MaterialIcons
                name="close"
                color={'white'}
                size={responsiveFontSize(3.3)}
              />
            </TouchableOpacity>
          </View>
        )}
        <Video
          onBuffer={onBuffer}
          onLoadStart={onLoadStart}
          onLoad={onLoad}
          style={{
            width: '100%',
            flex: 1,
            marginTop: responsiveHeight(2.5),
          }}
          source={{uri: videoLink}}
          fullscreen={true}
          //  controls={true}
        />
        {type !== 'chatPlayer' && (
          <ActivityIndicator
            animating
            size="large"
            color={'black'}
            style={{
              position: 'absolute',
              top: responsiveHeight(50),
              left: responsiveWidth(45),
              opacity: opacity,
            }}
          />
        )}
      </Animatable.View>
    )
  );
};
const Styles = StyleSheet.create({
  Backdrop: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,1)',
    position: 'absolute',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 100,
  },
});

export default VideoPlayer;
