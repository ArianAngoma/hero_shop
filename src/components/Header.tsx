import { Link } from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { app } from '../configs/firebase'

import Logo from './img/logo.png'
import Avatar from './img/avatar.png'

export const Header = () => {
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()

  const handleLogin = async () => {
    const responseAuth = await signInWithPopup(firebaseAuth, provider)
    console.log(responseAuth)
  }

  return (
    <header className="fixed z-50 w-screen p-6 px-16">
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
          <ul className="flex items-center gap-8">
            <li
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About
              Us
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service
            </li>
          </ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer"/>
            <div
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              src={Avatar}
              alt="user"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer"
              whileTap={{
                scale: 0.6
              }}

              onClick={handleLogin}
            />
          </div>
        </div>
      </div>

      <div className="flex md:hidden w-full h-full">

      </div>
    </header>
  )
}
