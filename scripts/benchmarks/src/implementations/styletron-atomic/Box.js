import { styled } from 'styletron-react'
import View from './View'

const getColor = ({ color }) => {
  switch (color) {
    case 0:
      return '#14171A'
    case 1:
      return '#AAB8C2'
    case 2:
      return '#E6ECF0'
    case 3:
      return '#FFAD1F'
    case 4:
      return '#F45D22'
    case 5:
      return '#E0245E'
    default:
      return 'transparent'
  }
}

const Box = styled(View, props => ({
  flexDirection: props.layout === 'column' ? 'column' : 'row',
  padding: props.outer ? '4px' : '0',
  height: props.fixed ? '6px' : null,
  width: props.fixed ? '6px' : null,
  backgroundColor: getColor(props)
}))

export default Box
