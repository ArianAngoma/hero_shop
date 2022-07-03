export interface IState {
  user: any
  productItems: any
}

export const actionTypes: { [x: string]: string } = {
  SET_USER: 'SET_USER',
  SET_PRODUCTS_ITEMS: 'SET_PRODUCTS_ITEMS'
}

export const reducer = (state: IState, action: any): IState => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user
      }

    default:
      return state
  }
}
