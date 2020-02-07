import React from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as Dragon } from "./assets/8-dragon.svg";
import { ReactComponent as Flame } from "./assets/flame.svg";
import "./App.css";

const wave = keyframes`
50% {
    transform: scale(0.98,1.0) translate(0, 2px) rotate(-1deg) translate3d(0,-5px,0);
  }
`;
const waveb = keyframes`
  50% {
    transform: scale(0.98,1.0) translate(2px, 0) rotate(1deg)translate3d(0,-4px,0);
  }
`;


const DragonBreathingFire = styled.span`
  &:hover{
    cursor:pointer;
  }

  display: block;
  width: calc(100% - 4rem);
  height: calc(100% - 6rem);
  margin: 0 auto;
  padding: 2rem 2rem 4rem 2rem;
  position: relative;
  text-align: center;

  .Drogon{
    [class^="fire-"]{
      animation: ${props =>
        props.status === "open" ? `drawin` : `drawout`} 3s ease-in-out infinite;
      animation-fill-mode: forwards;
      stroke-dashoffset: ${props => (props.status === "open" ? `0%` : `100%`)};
    }
    
    [class^="haira-"]{
      animation: ${wave} 3s ease-in-out -1s infinite;
    }
    
    [class^="hairb-"]{
      animation: ${waveb} 2s ease-in-out -1.25s infinite;
    }
  }

  .Flames {
    display: ${props => (props.status === "open" ? "block" : "none")};

    [class^="flame-"] {
      stroke-dashoffset: ${props => (props.status === "open" ? `0%` : `100%`)};
    }

    .flame-maina {
      animation: ${wave} 5s ease-in-out -1s infinite;
    }

    .flame-mainb {
      animation: ${waveb} 2s ease-in-out -1.25s infinite;
    }

    .flame-mainc {
      animation: ${wave} 3s ease-in-out -1s infinite;
    }
  }

  path {
    stroke-dasharray:100%;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-width: 2px;
  }
}
`;

const TextBlock = ({ title, subtitle }) => (
  <div className="text-block">
    <p>{subtitle}</p>
    <h1>{title}</h1>
  </div>
);

function App() {
  const [iconStatus, setIconStatus] = React.useState("default");
  const toggle = () => {
    iconStatus === "default" ? setIconStatus("open") : setIconStatus("default");
  };

  return (
    <div className="App">
      <div className="Sub-1 box" id="Sub1">
        <TextBlock
          subtitle="Adipisicing adipisicing proident tempor magna"
          title="Deserunt Lorem magna dolore consequat duis dolor tempor exercitation."
        />
        <DragonBreathingFire
          onClick={() => {
            toggle();
          }}
          status={iconStatus}
        >
          <Dragon className="Drogon" />
          <Flame className="Flames" />
        </DragonBreathingFire>
      </div>
      <div className="Sub-2 box">
        <TextBlock
          subtitle="Adipisicing adipisicing proident tempor magna"
          title="Deserunt Lorem magna dolore consequat duis dolor tempor exercitation."
        />
      </div>
      <div className="Sub-3 box">
        <TextBlock
          subtitle="Adipisicing adipisicing proident tempor magna"
          title="Deserunt Lorem magna dolore consequat duis dolor tempor exercitation."
        />
      </div>
    </div>
  );
}

export default App;
