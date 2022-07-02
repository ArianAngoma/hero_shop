import { IInitialState as IInitialStateUser } from './InitialState'

export interface IState {
  user: any
}

export type IAction =
  | { type: string; user: IInitialStateUser | null }

export const actionTypes: { [x: string]: string } = {
  SET_USER: 'SET_USER'
}

export const reducer = (state: IState, action: IAction): IState => {
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
