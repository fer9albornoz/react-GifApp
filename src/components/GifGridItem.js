import React from 'react'

const GifGridItem = ({ title, url }) => {

    return (
        <div className='card-item animate__animated animate__bounce animate__delay-2s'>
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

export default GifGridItem
