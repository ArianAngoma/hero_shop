import { fetchUser } from '../utils/fetchLocalStorage'

export interface IInitialState {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string | null;
  uid: string | null;
}

const userInfo = fetchUser()

export const initialState: { user: IInitialState | null } = {
  user: userInfo
}
