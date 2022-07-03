import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { CreateProduct, Header, MainContainer } from './components'
import { getAllProductItems } from './utils/firebase'
import { useStateValue } from './context/StateProvider'
import { actionTypes } from './context/reducer'

export const App = () => {
  const [{ productItems }, dispatch] = useStateValue()
  console.log(productItems)

  const fetchData = async () => {
    await getAllProductItems().then((data) => {
      dispatch({
        type: actionTypes.SET_PRODUCTS_ITEMS,
        productItems: data
      })
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header/>

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route
              path="/*"
              element={<MainContainer/>}
            />

            <Route
              path="/createProduct"
              element={<CreateProduct/>}
            />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}
