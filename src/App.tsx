import { Route, Routes } from 'react-router-dom'

import { CreateProduct, Header, MainContainer } from './components'

export const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header/>

      <main className="mt-24 p-8 w-full">
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
  )
}
