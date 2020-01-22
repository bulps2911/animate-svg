import React from 'react';
// import logo from './logo.svg';
import styled, { keyframes } from "styled-components"
import {ReactComponent as Dragon} from "./8-dragon.svg"
import {ReactComponent as Flame} from "./flame.svg"
import './App.css';

const swell = keyframes`
25%, 75%{
  transform:rotate(-1deg);
}

0%,50%, 100%{
  
  transform:rotate(1deg);
}
`
const swing = keyframes`
0%, 100%{
  transform:rotate3d(2,1,-1, -0.2turn);
}
50%{
  transform:rotate3d(-2,-1,1, -0.2turn);
  
}
`

const wave = keyframes`
50% {
  transform: scale(0.98,1.0) translate(0, 2px) rotate(-1deg) translate3d(0,-5px,0);
}
`
const waveb = keyframes`
50% {
  transform: scale(0.98,1.0) translate(2px, 0) rotate(1deg)translate3d(0,-4px,0);
}
`

const drawin = keyframes`
50%:{
  stroke-dashoffset: 100%;
}
100%:{
  stroke-dashoffset: 0%
}
`

const drawout = keyframes`
50%:{
  stroke-dashoffset: 0%;
}
100%:{
  stroke-dashoffset: 100%
}
`

const fadein = keyframes`
0%{
  opacity: 0%
}

100%{
  opacity: 100%
}
`
const fadeout = keyframes`
0%{
  opacity: 100%
}

100%{
  opacity: 0%
}
`

const DragonBreathingFire = styled.span`
&:hover{
  cursor:pointer;
}

display: block;
width:20em;
height:20em;

.Drogon{
  [class^="fire-"]{
    animation: ${props=> props.status=== 'open' ? `drawin` : `drawout`} 3s ease-in-out infinite;
    animation-fill-mode: forwards;
    stroke-dashoffset: ${props => props.status === 'open' ? `0%` : `100%`};
  }
  
  [class^="haira-"]{
    animation: ${wave} 3s ease-in-out -1s infinite;
  }
  
  [class^="hairb-"]{
    animation: ${waveb} 2s ease-in-out -1.25s infinite;
  }
}

.Flames{
  animation: ${props => props.status=== 'open' ? `drawin` : `drawout`} 3s ease-in-out infinite;

  [class^="flame-"]{
    stroke-dashoffset: ${props => props.status === 'open' ? `0%` : `100%`};
  }

.flame-maina{
  animation: ${wave} 5s ease-in-out -1s infinite;
}

.flame-mainb{
  animation: ${waveb} 2s ease-in-out -1.25s infinite;
}

.flame-mainc{
  animation: ${wave} 3s ease-in-out -1s infinite;
}
}


  height: 20em;
  width:20em;
  overflow: hidden;
  margin: 0 auto;

  path{
    
    stroke-dasharray:100%;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-width: 2px;
  }
}
`;


function App() {
  
    const [iconStatus, setIconStatus] = React.useState('default');
    const toggle=() =>{
      iconStatus === "default"
      ? setIconStatus('open')
      : setIconStatus('default');
    }
  

  return (
    <div className="App">
      <div className="Sub-1" id="Sub1">
        

        <p>Adipisicing adipisicing proident tempor magna</p>
      <h1>
        Deserunt Lorem magna dolore consequat duis dolor tempor exercitation.
      </h1>
      <DragonBreathingFire 
      onClick={()=>{ toggle()}}
      status={iconStatus}>
      <Dragon className="Drogon"/>
      <Flame className="Flames"/>
        
      </DragonBreathingFire>
      </div>
      <div className="Sub-2">
      
      <p>Adipisicing adipisicing proident tempor magna</p>
      <h1>
        Deserunt Lorem magna dolore consequat duis dolor tempor exercitation.
      </h1>
      
      </div>
      <div className="Sub-3">
      
      <p>Adipisicing adipisicing proident tempor magna</p>
      <h1>
        Deserunt Lorem magna dolore consequat duis dolor tempor exercitation.
      </h1>
    </div>
      
    </div>
  );
}

export default App;
