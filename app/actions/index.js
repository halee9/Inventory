import Firebase from 'firebase';
//import firebaseConfig from '../config/firebaseConfig';
//const firebase = require('firebase');
//const firebaseApp = firebase.initializeApp(firebaseConfig);
var invRef = new Firebase('https://hainv.firebaseio.com');

export function fetchInventory() {
  return dispatch => {
    //var Inventories = firebaseApp.database().ref().child('SKU');
    var SKU = invRef.child('SKU');
    SKU.on('value', snapshot => {
      console.log("+++++++++++++++++++++ Firebase fetched.");
      var skus = [];
        snapshot.forEach((child) => {
          skus.push(child.val());
        });
        dispatch({
          type: 'FETCH_INVENTORIES',
          skus
        });
      }, error => {
        console.log(error);
    });
  };
}

export function fetchCart() {
  return dispatch => {
    //var Inventories = firebaseApp.database().ref().child('SKU');
    var Cart = invRef.child('Cart');
    Cart.on('value', snapshot => {
      console.log("+++++++++++++++++++++ Firebase fetched.");
      var cartitems = [];
        snapshot.forEach((child) => {
          cartitems.push(child.val());
        });
        dispatch({
          type: 'FETCH_CART',
          cartitems
        });
      }, error => {
        console.log(error);
    });
  };
}

export function toggleInOutCart(item){
  return () => {
    var SKU = invRef.child('SKU');
    var Cart = invRef.child('Cart');
    item.isInCart = !item.isInCart ? true: false;
    let key = item.id;
    if (key)
      SKU.child(key).update(item).then(function(){
        if (item.isInCart)
          Cart.child(key).set(item);
        else
          Cart.child(key).remove();
      })
  };
}

export function toggleChecked(item){
  return () => {
    var Cart = invRef.child('Cart');
    item.checked = !item.checked ? true: false;
    let key = item.id;
    if (key)
      Cart.child(key).set(item);
  };
}

export function exportItems(items){
  console.log(items);
  return () => {
    var Cart = invRef.child('Cart');
    var SKU = invRef.child('SKU');
    items.forEach( item => {
      if (item.checked) {
        let key = item.id;
        Cart.child(key).remove().then(function(){
          SKU.child(key).update({ isInCart: false, lastPurchasedAt: new Date() });
        });
      }
    });
  };
}
