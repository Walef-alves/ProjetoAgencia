import React from 'react'

const Card = (props) => {
  return (
    <div className='mx-10'>
    <div className="flex flex-col gap-20 items-center justify-center mt-10  container">
    <div className="max-w-xs rounded-lg overflow-hidden border border-gray- shadow-lg bg-white ">
      <img className="w-full h-56 object-cover rounded-lg" src={props.image} alt="Shoes" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Shoes!</div>
        <p className="text-gray-700 text-base">
          If a dog chews shoes whose shoes does he choose?
        </p>
      </div>
    </div>

    <div className="max-w-xs rounded-lg overflow-hidden border border-gray-200 shadow-lg bg-white mx-2">
      <img className="w-full h-56 object-cover rounded-lg" src={props.image} alt="Shoes" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Shoes!</div>
        <p className="text-gray-700 text-base">
          If a dog chews shoes whose shoes does he choose?
        </p>
      </div>
    </div>

    <div className="max-w-xs rounded-lg overflow-hidden border border-gray-200 shadow-lg bg-white mx-2">
      <img className="w-full h-56 object-cover rounded-lg" src={props.image} alt="Shoes" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Shoes!</div>
        <p className="text-gray-700 text-base">
          If a dog chews shoes whose shoes does he choose?
        </p>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Card