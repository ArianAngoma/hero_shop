import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react'
import { IState as IStateProvider } from './reducer'
import { IInitialState as InitialStateProvider } from './InitialState'

export const StateContext = createContext({} as [IStateProvider, Dispatch<any>])

interface IProps {
  reducer: (state: IStateProvider, action: any) => IStateProvider
  initialState: InitialStateProvider
  children: ReactNode
}

export const StateProvider = ({
  reducer,
  initialState,
  children
}: IProps) => (
  // @ts-ignore
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = (): [IStateProvider, ((value: any) => void)] => useContext(StateContext)
