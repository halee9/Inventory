import React, { Component } from 'react';
import { connect } from 'react-redux'

import { toggleInOutCart, fetchInventory } from '../actions';
import SKUList from '../components/SKUList';
import styles from '../styles';

const mapStateToProps = (state) => {
  console.log('mapStateToProps:', state);
  return {
    inventories: state.inventory,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickToggle: (item) => {
      dispatch(toggleInOutCart(item))
    },
    onFetchInventory: () => {
      dispatch(fetchInventory())
    }
  }
}

const SKUListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SKUList)


export default SKUListContainer;
