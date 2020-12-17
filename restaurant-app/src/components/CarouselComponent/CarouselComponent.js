import React, { useEffect, useState } from 'react'
import { Carousel } from 'antd';
import Carousels from '../../datajson/carousel.json'
function CarouselComponent() {
    const [carouSel, setCarouSel] = useState(null)
    
    const contentStyle = {
        height: '200px',
        textAlign: 'center',
        background: '#364d79',
    };
    const fetchCarousel = async () => {
        setCarouSel(Carousels.carousel)

    };
    useEffect(() => {
        console.log("<===[ CarouselComponent ]===>");
        fetchCarousel()
    }, [])
    return (
        <div>
            <Carousel autoplay>
                {
                  carouSel&&carouSel?.map(item =>
                        (<div key ={item.id}>
                            <div style={contentStyle}  >
                                <img style={contentStyle} style={{ height: '100%', objectFit: 'cover', objectPosition: '50% 65%', width: '100%' }} src={item.image} alt="" />
                            </div>
                        </div>)
                    )

                }

            </Carousel>
        </div>
    )
}

export default CarouselComponent
