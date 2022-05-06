import React from 'react'
import "../item/item.css"

function card() {
    return (
        <div className='card-bottom'>
            <span className='descrip'>Description of what is done here</span>
            <div className='datos'>
                <span>Last Update</span>
                <span>3/8/2020</span>
            </div>
        </div>
    )
}

export default card