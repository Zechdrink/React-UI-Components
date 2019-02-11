import React from 'react';
import './Card.css';

import CardContent from './CardContent.js';

function CardContainer(){
   return  <a className ="cardContainer" href = "https://www.reactjs.org">
       <CardContent/>
    </a>
}

export default CardContainer;