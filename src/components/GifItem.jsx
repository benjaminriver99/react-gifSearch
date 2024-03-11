import React from 'react'

const GifItem = ({title , url, id}) => {
    console.log(title, url);
  return (
    <div>
        <h1 className='text-white font-bold text-start p-2'>{title}</h1>
        <img src={url} alt="{title}" width={600}/>
        
    </div>
  )
}

export default GifItem 