import React, { PropTypes, Component } from 'react';
import {
  Image,
  Dimensions,
  View
} from 'react-native';

let imageUrl = {
  noImage: require("./img/items/noImage.jpg"),
  tofu: require("./img/items/tofu.jpg"),
  mushroom: require("./img/items/mushroom.jpg"),
  broccoli: require("./img/items/broccoli.jpg"),
  greenonions: require("./img/items/greenonions.jpg"),
  romainelettuce: require("./img/items/romainelettuce.jpg"),
  cabbage: require("./img/items/cabbage.jpg"),
  beansprout: require("./img/items/beansprout.jpg"),
  kimchi: require("./img/items/kimchi.jpg"),
};

const thumbnail = {
  height: 50,
  width: 50,
  marginLeft: 5,
  marginRight: 5,
  borderRadius: 25,
};

const container = {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
};

const fullsize = {
  width: Dimensions.get('window').width,
};

const SKUImage = ({image, thumb=false}) => {
  let imageSource = imageUrl[image] || imageUrl["noImage"];
  return (thumb ?
    <Image style={thumbnail} source={imageSource} resizeMode='cover'/> :
    <View style={container}>
      <Image style={fullsize} source={imageSource} resizeMode='contain'/>
    </View>
  );
}

export default SKUImage;
