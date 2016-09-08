import React, { PropTypes } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import styles from '../styles';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import SKUImage from './SKUImage';
import ToggleIcons from './ToggleIcons';

const lineThrough = {textDecorationLine:"line-through"};

const CartItem = ({ onPress, id, name, unit, qty, location, image, isInCart, suppliers, checked, lastPurchasedAt, rowId }) => {
  //console.log("rowId", rowId);
  const backgroundColor = rowId%2 ? { backgroundColor: "mintcream" } : { backgroundColor: "oldlace" }
  let lineThrough = checked ? {textDecorationLine:"line-through",fontSize: 18} : {fontSize: 18};
  return (
      <TouchableHighlight
        underlayColor="transparent"
        style={backgroundColor}
        onPress={() =>
          Actions.Item({ id, name, unit, qty, location, image, isInCart, lastPurchasedAt, title: name })} >
        <View style={styles.li}>
          <SKUImage image={image} thumb={true} />
          <View style={{ flexDirection: 'column', flex: 1}}>
            <View >
              <Text style={lineThrough}>{name}</Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, marginTop: 2 }}>
              <Text style={{ flex: 1}}>{qty} {unit}</Text>
              <Text style={{ flex: 1}}>{suppliers.join(" ")}</Text>
            </View>
          </View>
          <ToggleIcons
            onPress={onPress}
            onIconName="check-square-o"
            offIconName="square-o"
            offIconOffset={-4}
            toggle={checked} />
        </View>
      </TouchableHighlight>
    );
}

CartItem.PropTypes = {
  onPress: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isInCart: PropTypes.bool.isRequired,
};

export default CartItem;
