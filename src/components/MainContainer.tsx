import HeroShop from '../img/shop.png'

export const MainContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">Hero Shop</p>

          <div className="w-6 h-6 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img src={HeroShop} alt="heroShop" className="w-full h-full object-contain"/>
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The best heroes store is in{' '}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">Your Hands</span>
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Buy Now
        </button>
      </div>

      <div className="py-2 bg-blue-400 flex-1"></div>
    </div>
  )
}
