import React from 'react';
import './styles/welcome.css'
import image from './img/food.png'

const Welcome = () => {
    return (
        <div className='landing'>
            <div className="orient-left">
                <h1>Get simple choice recipes</h1>
                <p>Prepare exquisite dishes quicly and efficiently.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis tempore architecto nihil, deleniti ducimus 
                eum earum vel omnis, ipsum natus fugit recusandae. Unde veniam
                dolore nesciunt, animi error assumenda eveniet?
                </p>
                <button className='btng'>Get Recipes</button>
            </div>
            <div className="orient-right">
                <img src={image} alt=""/>
            </div>
            <div className="scroll"><span></span></div>
        </div>
    )
}

export default Welcome;