import * as React from 'react'
import { Provider as StyletronProvider } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'

const engine = new Styletron()

export default props => {
  return <StyletronProvider value={engine}>{props.children}</StyletronProvider>
}
