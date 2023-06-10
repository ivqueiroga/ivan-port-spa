import React from 'react';
import {Link} from 'react-scroll';
import './Button.css';

type Props = {
  content: string,
  isLeft: boolean,
  highlight: boolean,
};

export default function Button({content, highlight, isLeft}: Props) {
  return (
    <div className={ isLeft? `button-left ${highlight ? 'highlight' : ''}` : `button-right ${highlight ? 'highlight' : ''}` }>
      <Link to={content}>{content}</Link>
    </div>
  )
}