import { fetchUser, fetchCart } from '../utils/fetchLocalStorage'

export interface IUserState {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string | null;
  uid: string | null;
}

export interface IInitialState {
  user: IUserState
  productItems: any
  cartShow: boolean
  cartItems: any
}

const userInfo = fetchUser()
const cartInfo = fetchCart()

export const initialState: IInitialState = {
  user: userInfo,
  productItems: null,
  cartShow: false,
  cartItems: cartInfo
}
