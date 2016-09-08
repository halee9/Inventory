import React, { PropTypes, Component } from 'react';
import {
  Image,
  Dimensions,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
    padding: 10,
  },
  label: {
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 5,
  },
  textInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingLeft: 5,
  },
});

class LabelTextInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: "#fff"
    };
  }
  onFocus(fn){
    console.log("onfocus", fn);
    this.setState({
      backgroundColor: "#eee"
    });
    if (fn) fn();
  }
  onBlur(fn){
    console.log("onBlur", fn);
    this.setState({
      backgroundColor: "#fff"
    });
    if (fn) fn();
  }
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }
  render(){
    const props = this.props;
    return (
      <View>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
          ref={component => this._root = component}
          { ...props }
          style={[styles.textInput, {backgroundColor: this.state.backgroundColor}]}
          autoCorrect={false}
          onFocus={()=>this.onFocus(props.onFocus)}
          onBlur={()=>this.onBlur(props.onBlur)}
        />
      </View>
    )
  }
}

export default LabelTextInput;
