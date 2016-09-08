import React, { Component } from 'react';
import {
  ListView,
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CartItem from './CartItem';
import TouchButton from './TouchButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  listviewContainer: {
    flex: 1,
    marginTop: 63,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

const container = {
  flex: 1,
  flexDirection: "column",
  width: undefined,
  height: undefined,
  backgroundColor:'transparent',
  //justifyContent: 'center',
  alignItems: 'center'
};

class CartList extends Component {
  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    });
  }
  componentDidMount() {
    this.props.fetchCart();
  }
  componentWillReceiveProps(nextProps) {
    this.dataSource = this.dataSource.cloneWithRows(nextProps.inventories.cartitems)
  }
  render() {
    return (
      <Image
        source={require('./img/images/home3.jpg')}
        style={styles.container}>
        <ListView
          style={styles.listviewContainer}
          enableEmptySections={true}
          dataSource={this.dataSource}
          renderRow={(data, secId, rowId, highlightRow) =>
            <CartItem {...data} rowId={rowId} onPress={this.props.toggleChecked.bind(this, data)} />
          }
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
          renderFooter={() =>
            <View>
              <TouchButton
                onPress={this.props.exportItems.bind(this, this.props.inventories.cartitems)}>
                Export Checked Items
              </TouchButton>
              <TouchButton
                icon="rocket"
                onPress={Actions.List}
                backgroundColor="#aaa">
                Go to Inventory List
              </TouchButton>
            </View>
          }
        />
      </Image>
    )
  }
}

export default CartList;
