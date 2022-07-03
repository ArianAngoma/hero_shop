import HeroShop from '../img/shop.png'

export const HomeContainer = () => {
  return (
    <section className="grid gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-center justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">Hero Shop</p>

          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img src={HeroShop} alt="heroShop" className="w-full h-full object-contain"/>
          </div>
        </div>

        <p className="text-[4.5rem] lg:text-[6.5rem] font-bold tracking-wide text-headingColor text-center">
          The best
          <br/>
          heroes store
          <br/>
          is in{' '}
          <br/>
          <span className="text-orange-600 text-[5rem] lg:text-[7rem]">Your Hands</span>
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-10 py-5 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-xl"
        >
          Buy Now
        </button>
      </div>
    </section>
  )
}
