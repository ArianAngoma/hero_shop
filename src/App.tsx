import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { CreateProduct, Header, MainContainer } from './components'

export const App = () => {
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
