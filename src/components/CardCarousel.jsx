import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MyCard } from './MyCard';
import { massage, responsive } from '../data';


const massages = massage.map(obj => 
  <MyCard key={obj.id} title={obj.title} price={obj.price} text={obj.text} duration={obj.duration} />
)


export const CardCarousel = () => {
  return (
        <div className='cardCarousel'>
                  <Carousel 
                  autoPlay={true}
                  autoPlaySpeed={5000}

                  customTransition="all .5"
                  transitionDuration={500}
                  responsive={responsive}>
                    {massages}
                  </Carousel>
        </div>
  )
}
