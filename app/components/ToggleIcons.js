import React, { PropTypes, Component } from 'react';
import {
  Text,
  TouchableHighlight,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

class ToggleIcons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  togglePress(fn){
    this.setState({
      loading: true
    });
    return fn();
  }
  createPadding(offset){
    if (offset==0) return {};
    return (offset < 0) ? { paddingRight: Math.abs(offset) } : { paddingLeft: offset };
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      loading: false
    })
  }
  render() {
    //console.log("loading-render", this.state.loading);
    const size = this.props.size || 30;
    const color = this.props.color || "#333";
    const onIconOffset = this.props.onIconOffset || 0;
    const offIconOffset = this.props.offIconOffset || 0;
    const onIcon = (<Text style={this.createPadding(onIconOffset)}>
      <Icon name={this.props.onIconName} size={size} color={color} />
      </Text>);
    const offIcon = (<Text style={this.createPadding(offIconOffset)}>
      <Icon name={this.props.offIconName} size={size} color={color} />
      </Text>);
    if (this.state.loading)
      return (
        <ActivityIndicator
          animating={this.state.loading}
          style={[styles.centering, {height: size}]}
          size="small"
          color={color}
          />
      );
    else
      return (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={this.togglePress.bind(this, this.props.onPress)}
          style={styles.centering}>
            { this.props.toggle ? onIcon : offIcon }
        </TouchableHighlight>
      );
  }
}

ToggleIcons.PropTypes = {
  onPress: PropTypes.func.isRequired,
  onIconName: PropTypes.string.isRequired,
  offIconName: PropTypes.string.isRequired,
  toggle: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  onIconOffset: PropTypes.number.isRequired,
  offIconOffset: PropTypes.number.isRequired,
};

export default ToggleIcons;
