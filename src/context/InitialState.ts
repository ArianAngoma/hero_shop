export interface IInitialState {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string | null;
  uid: string | null;
}

export const initialState: { user: IInitialState | null } = {
  user: null
}
