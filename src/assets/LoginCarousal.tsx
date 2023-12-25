import { Carousel } from "@material-tailwind/react";
const LoginCarousal = () => {
  return (
      <Carousel
          className="rounded-xl w-96 h-56"
          navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-8 left-2/4 z-50 flex bg-white -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                      <span
                          key={i}
                          className={`block h-1 cursor-pointer bg-gray-800 rounded-full transition-all content-[''] ${activeIndex === i ? "w-8 bg-black" : "w-4 bg-white/50"}`}
                          onClick={() => setActiveIndex(i)} />
                  ))}
              </div>
          )} placeholder={undefined} loop={true} autoplay={true}
      >
          <div className="h-24 flex flex-col w-96 object-cover">
              <img
                  src="loginEntryPointPost.webp"

                  alt="image 1"
                  className=" h-24 object-contain w-96"
              />
              <p className="px-20 font-[roboto] text-center">Help us become one of the safest places to buy and sell</p>
          </div>
          <div className="h-24  flex flex-col w-96 object-cover">
              <img
                  src="loginEntryPointFavorite.webp"
                  alt="image 2"
                  className=" h-24 object-contain w-96"
              />
              <p className="px-20 font-[roboto] text-center">Close deals from the comfort of your home</p>
          </div>
          <div className="h-24  flex flex-col w-96 object-cover">
              <img
                  src="loginEntryPointChat.webp"
                  alt="image 3"
                  className=" h-24 object-contain w-96"
              />
              <p className="px-20 font-[roboto] text-center">Keep all your favourites in one place</p>
          </div>
      </Carousel>
  )
}

export default LoginCarousal