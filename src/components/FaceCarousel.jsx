import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MyCard } from './MyCard';
import { arckezeles, responsive } from '../data';


const arckezelesek = arckezeles.map(obj => 
  <MyCard key={obj.id} title={obj.title} price={obj.price} text={obj.text} duration={obj.duration} img={obj.img}/>
)


export const FaceCarousel = () => {
  return (
        <div className='cardCarousel'>
                  <Carousel 
                  autoPlay={true}
                  autoPlaySpeed={5000}

                  customTransition="all .5"
                  transitionDuration={500}
                  responsive={responsive}>
                    {arckezelesek}
                  </Carousel>
        </div>
  )
}
