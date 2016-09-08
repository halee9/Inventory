import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../actions';
import CartList from '../components/CartList';
import styles from '../styles';

const mapStateToProps = (state) => {
  console.log('mapStateToProps:', state);
  return {
    inventories: state.inventory
  }
}

const CartContainer = connect(
  mapStateToProps,
  actions
)(CartList)


export default CartContainer;
