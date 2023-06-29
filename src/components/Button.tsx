import React from 'react';
import {Link} from 'react-scroll';
import './Button.css';

type Props = {
  content: string,
  isLeft: boolean,
  highlight: boolean,
  link: string,
  download?: string,
  icon?: JSX.Element,
  thereIsDownload: boolean,
};

export default function Button({content, highlight, isLeft, link, download, thereIsDownload, icon}: Props) {
  return (
    <div className={ isLeft? `button-left ${highlight ? 'highlight' : ''}` : `button-right ${highlight ? 'highlight' : ''}` }>
      {thereIsDownload 
      ? <a href={link} download={download}>Currículo {icon}</a>
      : <Link spy={true} activeClass="active" smooth={true} duration={500} offset={-200} to={link}>{content}</Link>
      }
    </div>
  )
}