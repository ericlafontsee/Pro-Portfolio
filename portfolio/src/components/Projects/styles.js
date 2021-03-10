import { animated } from 'react-spring'
import styled from 'styled-components'


const Container = styled(animated.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-gap: 25px;
  padding: 25px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
  // background: rgba(0,0,0,0.8) !important;

`

const Item = styled(animated.div)`
  width: 100%;
  height: 100%;
  // background: white;
  background: rgba(0,0,0,0);
  overflow: hidden;
  border-radius: 5px;
  will-change: transform, opacity;
`

export { Container, Item }
