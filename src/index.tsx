import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Convertor from './Convertor'
import { Mode } from './Convertor'

ReactDOM.render(
  <Convertor convert mode={Mode.display}>
    2
    <input />
  </Convertor>,
  document.getElementById('root')
)
