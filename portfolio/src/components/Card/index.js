import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { Item } from '../../pages/Projects/styles';
import './style.css'

function Card(props) {
  console.log('props', props);
  const backImg = props.image;
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div id="card" onClick={() => set(state => !state)}>
      <animated.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
        <img id="backImg" src={backImg}/>
      </animated.div>
      <animated.div className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
        <h3 id="appName">{props.name}</h3>
        <p id="appDesc">{props.description}</p>
        <a href={props.GitHub} target="_blank"><button id='github'>Github</button></a>
        <a href={props.Deployed} target="_blank"><button id='deployed'>Deployed</button></a>
      </animated.div>
    </div>
  )
}

export default Card;

