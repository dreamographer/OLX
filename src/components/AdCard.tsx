import React from 'react'

const AdCard = () => {
    return (


        <div className=" max-w-sm w- bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='h-[200px]'>
                <img className="p-8 rounded-t-lg h-full w-full object-cover" src="https://apollo.olx.in/v1/files/89rzr49zof2h2-IN/image;s=300x600;q=60" alt="product image" />
            </div>
            <div className="px-4 pb-2  relative">
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-[roboto] font-medium text-gray-900 dark:text-white">₹599</span>
                </div>
                <h5 className="text-sm font-semibold tracking-tight text-gray-600 line-clamp-1 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                <div className=' bottom-1 flex pt-3  w-full justify-between '>
                    <p className="text-xs max-w-16 font-semibold tracking-tight text-gray-600 line-clamp-1 dark:text-white">location</p>
                    <p className="text-xs max-w-20  font-semibold text-gray-600 line-clamp-1 dark:text-white">6 days</p>
                </div>
            </div>
        </div>

    )
}

export default AdCard