import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import styles from '../styles';
import SKUImage from './SKUImage';
import TouchButton from './TouchButton';
import { Actions } from 'react-native-router-flux';

const container = {
  flex: 1,
  flexDirection: "column",
  backgroundColor:'transparent',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: 100
};

const SKUItem = (props) => {
  const item = props.item;
  return (
    <View style={container}>
      <View>
        <Text>SKU: { item.id }</Text>
        <Text>Name: { item.name }</Text>
        <Text>Unit: { item.unit }</Text>
        <Text>Qty: { item.qty }</Text>
        <Text>Location: { item.location }</Text>
        <Text>Last purchased at: { item.lastPurchasedAt ? item.lastPurchasedAt.toString() : "None" }
        </Text>
        <TouchButton
          onPress={() => Actions.ItemForm({ ...item })}
          backgroundColor="#aaa">
          Edit
        </TouchButton>
      </View>
      <SKUImage image={item.image} />
    </View>
  );
}

export default SKUItem;
