import React from 'react'

const RandomImage = (props) => {

    const img = `https://source.unsplash.com/600x400/?${props.name}`
  return (
    <div className='container mgbottom'>
        <img src={img} alt='..'/>
    </div>
  )
}

export default RandomImage