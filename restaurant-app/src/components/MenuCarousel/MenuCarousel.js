import React, { useState } from 'react'
import './MenuCarousel.css'
import Carousel from 'react-elastic-carousel'
import MenuItem from '../MenuItem/MenuItem';

function MenuCarousel({ groupFood }) {
    console.log("groupFood", groupFood);
    const [state, setstate] = useState(groupFood)
    console.log("state",state);
    return (
        <div className='menucarousel'>
            <Carousel>
                {state.map((item)=>
                    <MenuItem
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                )}

            </Carousel>
        </div>
    )
}

export default MenuCarousel
