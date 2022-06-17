import React from 'react';
import './Group.css'
import admin from './../../img/jony.jpg'

const Group = () => {
    return (
        <div>
<div className="infocardContainer">
    <div id="main">
         <img src={admin}></img>
    </div>
  <div id="textbois">
         <h2>Mind Map Orbs</h2>
           <h4>Professional Developer</h4>
         <a href="">jonyh0296@gmail.com</a>
         <div id="hotlinks">
             <a href=""><img id="codepenio" src=""    target="_blank"></img>
          </a>
           <a href="">
              <img id="codepenio" src="" target="_blank"></img>
           </a>
           <a href="">
              <img id="codepenio" src="" target="_blank"></img>
            </a>
       </div>
    </div>
</div>

</div>
    );
};

export default Group;