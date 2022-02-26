import React from 'react'
import Slider from "react-slick";
import {Spinner} from "../index"

function CarouselSlider({ banners, loading }) {
    const setting = {
        dots: true,
        arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#fff"
          }}
        > 
        <div>
        {dots}
        </div>
        <div className='text-green'>
            View All {">"}
        </div>
        </div>
      )
    }

    if(loading) {
      return (
      <div className='card-profile shadow flex center'>
        <Spinner />
        </div>
      )
    }

    return (
        <div style={{width: '400px', backgroundColor: "#fff"}}>
        <Slider {...setting}
        >
            {
                banners && banners.map((item, index) => (
                    <div key={index}>
                        <img width={400} src={item} alt={`banner-${index}`} />
                    </div>
                ))
            }
        </Slider>

        </div>
    )
}

export default CarouselSlider