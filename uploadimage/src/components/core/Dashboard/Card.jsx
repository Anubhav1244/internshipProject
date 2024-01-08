import React from 'react'

const Card = ({image, name, count, description, increaseCounter, id}) => {
  return (
    <div className='flex flex-col border rounded-md px-6 py-4' onClick={()=>increaseCounter(id)}>
        <p className='py-2'>Name: {name}</p>
        <img src={image} alt="card" className=' h-[250px]'/>
        <p className='py-2'>View: {count}</p>
        <p className='py-2'>Description: {description}</p>

    </div>
  )
}

export default Card