import React from 'react'
import './PhotoCard.css';

type Props = {
  content: string,
  isLeft: boolean,
  link: string,
};

function PhotoCard({content, isLeft, link}: Props) {
  return (
    <div className={ isLeft? 'photo-left' : 'photo-right'} >
      <img src={link} width='150px' alt={content} style={{borderRadius: '5px'}}/>
    </div>
  )
}

export default PhotoCard