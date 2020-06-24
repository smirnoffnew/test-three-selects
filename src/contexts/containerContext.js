import React from 'react'
import { containerReducer, initialState } from '../reducers/containerReducer';

export const containerContext = React.createContext()

const ContainerContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(containerReducer, [], () => {
    const localData = localStorage.getItem('state')

    return localData ? JSON.parse(localData) : initialState
  })

  React.useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  return <containerContext.Provider value={{ state, dispatch }}>
    {children}
  </containerContext.Provider>
}

export default ContainerContextProvider
