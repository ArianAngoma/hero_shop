import { fetchUser } from '../utils/fetchLocalStorage'

export interface IUserState {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string | null;
  uid: string | null;
}

export interface IInitialState {
  user: IUserState;
  productItems: any;
}

const userInfo = fetchUser()

export const initialState: IInitialState = {
  user: userInfo,
  productItems: null
}
