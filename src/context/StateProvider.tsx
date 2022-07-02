import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react'
import { IAction as IActionProvider, IState as IStateProvider } from './reducer'
import { IInitialState as InitialStateProvider } from './InitialState'

export const StateContext = createContext({} as [IStateProvider, Dispatch<IActionProvider>])

interface IProps {
  reducer: (state: IStateProvider, action: IActionProvider) => IStateProvider
  initialState: { user: InitialStateProvider | null }
  children: ReactNode
}

export const StateProvider = ({
  reducer,
  initialState,
  children
}: IProps) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = (): [IStateProvider, ((value: IActionProvider) => void)] => useContext(StateContext)
