import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import SKUListContainer from '../containers/SKUListContainer';
import Home from './Home';
import SKUItem from './SKUItem';
import CameraComp from './CameraComp';
import ShowPhoto from './ShowPhoto';
import ImageList from './ImageList';
import ItemForm from './ItemForm';
import CartContainer from '../containers/CartContainer';

class Navi extends Component {
  render() {
    console.log(this.state);
    return (
      <Router>
        <Scene key="root" passProps={true} titleStyle={{ fontWeight: "bold" }}>
          <Scene key="Home" component={Home} hideNavBar={true} initial={true} />
          <Scene key="Cart" component={CartContainer} hideNavBar={false} title="Shopping List" />
          <Scene key="List" component={SKUListContainer} hideNavBar={false} title="Inventory List" />
          <Scene key="Item" component={SKUItem} hideNavBar={false} title="ITEM" />
          <Scene key="Camera" component={CameraComp} hideNavBar={false} title="Camera" />
          <Scene key="Photo" component={ShowPhoto} hideNavBar={false} title="Photo" />
          <Scene key="ImageList" component={ImageList} hideNavBar={false} title="Image List" />
          <Scene key="ItemForm" component={ItemForm} hideNavBar={false} title="Edit Item" />
        </Scene>
      </Router>
    )
  }
}

export default Navi;
