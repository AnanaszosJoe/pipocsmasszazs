import * as React from 'react';
import massageunsplash from "../assets/massageunsplash.jpg"
import fimg1 from "../images/fimg1.jpg"


export const MyCard = (props) => {
  return (

    <div key={props.id}
    className='card'>
      <img alt="Sample"
      className='img-card'
    src={props.img}/>
      <h2 className='card-title'>{props.title}</h2>
      <p className='price mycard'>{props.price} Ft</p>
      <p className='mycard'>{props.text}</p>
      <p className='mycard'>{props.duration} perc</p>
      {/*<button className='massage-button'>Ezt választom</button>*/}
    </div>
  );
}

