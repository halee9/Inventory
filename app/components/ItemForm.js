import React, { PropTypes, Component } from 'react';
import {
  Image,
  Dimensions,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Selector from './Selector';
import LabelTextInput from './LabelTextInput';
import TouchButton from './TouchButton';
import { ItemUnit, ItemGroup, ItemShop } from '../constants';
import _ from 'lodash';

const pickerData = {
  "group": ItemGroup,
  "unit": ItemUnit,
  "shop1": ItemShop,
  "shop2": ItemShop,
  "shop3": ItemShop
}

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
  picker: {
    width: width,
    backgroundColor: '#eee',
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  footer: {
    height: 300,
  }
});

class ItemForm extends Component {
  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      name: props.name || "",
      group: props.group || "None",
      unit: props.unit || "None",
      qty: props.qty,
      storage: props.location || "",
      shop1: props.suppliers[0] || "None",
      shop2: props.suppliers[1] || "None",
      shop3: props.suppliers[2] || "None",
      activeSelector: "",
      backgroundColor: "#fff"
    };
  }
  clearSelectors(){
    this.setState({
      activeSelector: ""
    });
  }
  render(){
    let select = this.state.activeSelector;
    let picker = <View />;
    if (select !== "") {
      let values = pickerData[select];
      picker =
        <Selector
          onPressClose={()=>this.clearSelectors()}
          selectedValue={this.state[select]}
          onValueChange={(value) => this.setState({[select]: value})}
          values={values} />;
    }
    return (
      <View style={styles.container}>
      <ScrollView>
        <LabelTextInput
          label="Name:"
          placeholder="Item name ..."
          onChangeText={name => this.setState({name})}
          value={this.state.name}
          onFocus={this.clearSelectors.bind(this)}
        />
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => this.setState({activeSelector: "group"})}>
          <LabelTextInput
            label="Group:"
            value={this.state.group}
            editable={false}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => this.setState({activeSelector: "unit"})}>
          <LabelTextInput
            label="Unit:"
            value={this.state.unit}
            editable={false}
          />
        </TouchableHighlight>
        <LabelTextInput
          label="Qty:"
          style={[styles.textInput, {backgroundColor: this.state.backgroundColor}]}
          onChangeText={qtyString => {
            let qty = parseInt(qtyString);
            qty = qty>0 ? qty : 0;
            return this.setState({qty})}
          }
          value={this.state.qty.toString()}
          keyboardType="numeric"
          onFocus={()=>this.clearSelectors()}
        />
        <LabelTextInput
          label="Storage:"
          style={[styles.textInput, {backgroundColor: this.state.backgroundColor}]}
          placeholder="Storage name ..."
          onChangeText={storage => this.setState({storage})}
          value={this.state.storage}
          onFocus={()=>this.clearSelectors()}
        />
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => this.setState({activeSelector: "shop1"})}>
          <LabelTextInput
            label="Shop 1:"
            value={this.state.shop1}
            editable={false}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => this.setState({activeSelector: "shop2"})}>
          <LabelTextInput
            label="Shop 2:"
            value={this.state.shop2}
            editable={false}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => this.setState({activeSelector: "shop3"})}>
          <LabelTextInput
            label="Shop 3:"
            value={this.state.shop3}
            editable={false}
          />
        </TouchableHighlight>
        <View style={styles.footer}>
          <TouchButton onPress={Actions.Camera}>
            Take a Photo
          </TouchButton>
        </View>
      </ScrollView>
      { picker }
      </View>
    )
  }
}

export default ItemForm;
