import AdCard from "./AdCard"


const Main = () => {
  return (
    <div className="w-full p-10">
        <h1 className="text-2xl">Fresh Recommendations</h1>  
          <div className="grid md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
          <AdCard />
          <AdCard />
          <AdCard />
          <AdCard />

        </div>
    </div>
  )
}

export default Main