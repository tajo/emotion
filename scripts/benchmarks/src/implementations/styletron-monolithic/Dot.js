import { styled } from 'styletron-react'
import View from './View'

const Dot = styled(View, props => ({
  position: 'absolute',
  cursor: 'pointer',
  width: 0,
  height: 0,
  borderColor: 'transparent',
  borderStyle: 'solid',
  borderTopWidth: 0,
  transform: 'translate(50%, 50%)',
  marginLeft: `${props.x}px`,
  marginTop: `${props.y}px`,
  borderRightWidth: `${props.size / 2}px`,
  borderBottomWidth: `${props.size / 2}px`,
  borderLeftWidth: `${props.size / 2}px`,
  borderBottomColor: props.color
}))

export default Dot
