import React, { useEffect, useState } from 'react';
import './LogoSpinner.css';
import rawData from '../utils/data';

function LogoSpinner() {
  const { icons } = rawData;
  const [skillSet, setSkillSet] = useState<any[]>([]);
  const [rotate, setRotate] = useState<number>(0);
  const [arrPos, setArrPos] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const arr: any = []
    icons?.map((icon) => arr.push(icon));
    setSkillSet(arr);
    setRotate(0);
  },[icons]);

  useEffect(() => {
    // const spinNumber = Math.floor(360/skillSet.length)
    // const RESTO = Math.floor(360%skillSet.length);
    // const maxSpin = Math.floor(RESTO + spinNumber * skillSet.length);
    const intervalId = setInterval(() => {
      setTimeLeft((t) => t + 1);
      if(rotate >= 360) {
        setRotate(prevState => {
          prevState = 0;
          return prevState + 1;
        })
        if (arrPos < skillSet.length -1) {
          setArrPos(prevPos => prevPos + 1)
        } else setArrPos(0);
      } else {
        setRotate(prevState => prevState + 1);
      }
    }, 10);
  return () => {
    clearInterval(intervalId);
    }
  }, [arrPos, rotate, skillSet.length, timeLeft]);

  const rotationHandler = () => {
    const spinNumber = Math.floor(360/skillSet.length)
    const target = spinNumber + rotate;
      return `${Number(target)}deg`   
  };
  
  const renderIcon = () => {
    const e = skillSet[arrPos]
    const Icon = e.icon;
    return (
      <div className='spinner' key={e.name}>
        <Icon className='iconBox' size={30} style={{transform: `rotateY(${rotationHandler()})`}}/>
        <p className='iconBox-Text'>{e.name}</p>
      </div> 
    );}

  return (
    <div>
      <div className='icons-spin-zone'>
        {skillSet.length > 0 ? renderIcon() : ''}
      </div>
    </div>
  )
}

export default LogoSpinner