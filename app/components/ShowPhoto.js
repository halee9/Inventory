import React, { PropTypes, Component } from 'react';
import {
  Image,
  DeviceEventEmitter,
  ActivityIndicatorIOS,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';
//var RNUploader = require('NativeModules').RNUploader;
import { RNS3 } from 'react-native-aws3';
import s3_options from '../config/s3';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#EEE',
  }
});

function _generateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};


class ShowPhoto extends Component {
  constructor(props){
    super(props);
  }

  _uploadImages(){
    const file = {
      uri: this.props.path,
      name: _generateUUID() + '.jpg',
      type: 'image/jpeg',
    };

    const options = s3_options;
    //this.setState({ uploading: true, showUploadModal: true, });
    RNS3.put(file, options).then(response => {
      console.log(response);
      if (response.status !== 201)
        throw new Error('Failed to upload image to S3', response);
      console.log('*** BODY ***', response.body);
      Actions.pop();
    });
    //this.setState( { uploading: false, uploadStatus: status } );

  }
  render(){
    let path = this.props.path;
    return (
      <Image source={{uri: path}} style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={this._uploadImages.bind(this)}>
          <Text>Upload</Text>
        </TouchableHighlight>
      </Image>
    );
  }
}

export default ShowPhoto;
