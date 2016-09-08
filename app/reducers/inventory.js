const inventory = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_INVENTORIES':
      return Object.assign({}, state, {
        skus: action.skus
      })
    case 'FETCH_CART':
      return Object.assign({}, state, {
        cartitems: action.cartitems
      })
    case 'TOGGLE_INOUT_CART':
      console.log("TOGGLE_INOUT_CART", action.index)
      return Object.assign({}, state, {
        skus: state.skus.map((sku, index) => {
          if (index === action.index) {
            console.log("sku", sku)
            sku.isInCart = sku.isInCart ? false : true;
          }
          return sku;
        })
      })
    default:
      return state;
  }
}



export default inventory;
