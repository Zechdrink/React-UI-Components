import React from 'react';
import './Card.css';

import CardBanner from './CardBanner.js';

function CardContent() {
    return <section className = "cardSection">
        <CardBanner/>
    <div class = "card-textcontent">
        <h2>Get Started With React</h2>
        <p>React makes it painless to create interactive UIs. Design simple views for<br></br>
        each state in your application. <br></br> <span>reactjs.org</span></p>
        </div>
     </section>
     
}

export default CardContent;