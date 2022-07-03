export interface IState {
  user: any
  productItems: any
  cartItems: any
  cartShow: any
}

export const actionTypes: { [x: string]: string } = {
  SET_USER: 'SET_USER',
  SET_PRODUCTS_ITEMS: 'SET_PRODUCTS_ITEMS',
  SET_CART_SHOW: 'SET_CART_SHOW',
  SET_CARTITEMS: 'SET_CARTITEMS'
}

export const reducer = (state: IState, action: any): IState => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user
      }

    case actionTypes.SET_PRODUCTS_ITEMS:
      return {
        ...state,
        productItems: action.productItems
      }

    case actionTypes.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow
      }

    case actionTypes.SET_CARTITEMS:
      return {
        ...state,
        cartItems: action.cartItems
      }

    default:
      return state
  }
}
