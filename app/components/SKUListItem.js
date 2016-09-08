import React, { PropTypes, Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import SKUImage from './SKUImage';
import ToggleIcons from './ToggleIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const SKUListItem = (item) => {
    let index = parseInt(item.rowId.split(":")[1]);
    const backgroundColor = index%2 ? { backgroundColor: "#eee" } : { backgroundColor: "#fff" }
    //let background = isInCart ? { backgroundColor: "gold" } : { backgroundColor: "transparent"};
    return (
      <TouchableHighlight
        underlayColor="transparent"
        style={backgroundColor}
        onPress={() => Actions.Item({ item: item, title: item.name })}
         >
        <View style={styles.container}>
          <SKUImage image={item.image} thumb={true} />
          <View style={{ flexDirection: 'column', flex: 1}}>
            <View >
              <Text style={{fontSize: 18}}>{item.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, marginTop: 2}}>
              <Text style={{ flex: 2}}>{item.id} {item.qty} {item.unit} {item.location}</Text>
              <Text style={{ flex: 1}}>
                { item.lastPurchasedAt ? item.lastPurchasedAt.toString().substr(0,10) : "" }
              </Text>
            </View>
          </View>
          <ToggleIcons
            onPress={item.onPress}
            onIconName="cart-plus"
            offIconName="shopping-cart"
            toggle={item.isInCart} />
        </View>
      </TouchableHighlight>
    );
}

SKUListItem.PropTypes = {
  onPress: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isInCart: PropTypes.bool.isRequired,
};

export default SKUListItem;
