import React, { useEffect, useState } from 'react'
import { Image } from './style'
import Timer from '../Timer'

function PoseViewer(props) {
  const [timeLeft, setTimeLeft] = useState(props.time);

  useEffect(() => {
    console.log(`rendered!`);

    const timer = setTimeout(() => {
      props.onTimeUp();
    }, props.time * 1000);
    

    // const timer2 = setTimeout(() => {
    //   console.log(timeLeft)
    //   setTimeLeft(timeLeft - 1);
    // }, 1000);

    return () => {
      // console.log("clear");
      // clearTimeout(timer2);
      clearTimeout(timer);
    }
  })


  return(
    <div key={ props.url }>
      <Image src={ props.url } alt="" />
      <Timer time={ props.time } />
    </div>
  )
}

export default PoseViewer;