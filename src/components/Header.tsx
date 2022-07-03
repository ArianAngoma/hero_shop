import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md'
import { motion } from 'framer-motion'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'

import { app } from '../configs/firebase'
import { useStateValue } from '../context/StateProvider'
import { actionTypes } from '../context/reducer'

export const Header = () => {
  const [{ user }, dispatch] = useStateValue()

  const [isMenu, setIsMenu] = useState<boolean>(false)

  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()

  const handleLogin = async () => {
    if (!user) {
      const {
        user: {
          // refreshToken,
          providerData
        }
      } = await signInWithPopup(firebaseAuth, provider)

      dispatch({
        type: actionTypes.SET_USER,
        user: providerData[0]
      })

      localStorage.setItem('user', JSON.stringify(providerData[0]))
    } else {
      setIsMenu(!isMenu)
    }
  }

  const handleLogout = () => {
    setIsMenu(false)
    localStorage.clear()

    dispatch({
      type: actionTypes.SET_USER,
      user: null
    })
  }

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link
          className="flex items-center gap-2"
          to={'/'}
        >
          <img
            src={Logo}
            alt="logo"
            className="w-8 object-cover"
          />
          <p className="text-headingColor text-xl font-bold">Arian Shop</p>
        </Link>

        <div className="flex items-center gap-8">
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer"/>
            <div
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              src={user ? user.photoURL : Avatar}
              alt="user"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              whileTap={{
                scale: 0.6
              }}

              onClick={handleLogin}
            />

            {
              isMenu && (
                <motion.div
                  className="w-40 bg-primary shadow-x1 rounded-lg flex flex-col absolute top-12 right-0"
                  initial={{
                    opacity: 0,
                    scale: 0.6
                  }}

                  animate={{
                    opacity: 1,
                    scale: 1
                  }}

                  exit={{
                    opacity: 0,
                    scale: 0.6
                  }}
                >
                  {
                    user && user.email === 'arian.angoma.js@gmail.com' && (
                      <Link to={'/createProduct'}>
                        <p
                          className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                          New Item <MdAdd/>
                        </p>
                      </Link>
                    )
                  }
                  <p
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                    onClick={handleLogout}
                  >
                    Logout <MdLogout/>
                  </p>
                </motion.div>
              )
            }
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between md:hidden w-full h-full">
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl cursor-pointer"/>
          <div
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
        </div>

        <Link
          className="flex items-center gap-2"
          to={'/'}
        >
          <img
            src={Logo}
            alt="logo"
            className="w-8 object-cover"
          />
          <p className="text-headingColor text-xl font-bold">Arian Shop</p>
        </Link>

        <div className="relative">
          <motion.img
            src={user ? user.photoURL : Avatar}
            alt="user"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            whileTap={{
              scale: 0.6
            }}

            onClick={handleLogin}
          />

          {
            isMenu && (
              <motion.div
                className="w-40 bg-primary shadow-x1 rounded-lg flex flex-col absolute top-12 right-0"
                initial={{
                  opacity: 0,
                  scale: 0.6
                }}

                animate={{
                  opacity: 1,
                  scale: 1
                }}

                exit={{
                  opacity: 0,
                  scale: 0.6
                }}
              >
                {
                  user && user.email === 'arian.angoma.js@gmail.com' && (
                    <Link to={'/createProduct'}>
                      <p
                        className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                        New Item <MdAdd/>
                      </p>
                    </Link>
                  )
                }

                <p
                  className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={handleLogout}
                >
                  Logout <MdLogout/>
                </p>
              </motion.div>
            )
          }
        </div>
      </div>
    </header>
  )
}
