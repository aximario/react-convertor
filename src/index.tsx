import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Convertor from './Convertor'
import { Mode } from './Convertor'

ReactDOM.render(
  <Convertor mode={Mode.display}>
    <p>2</p>
    <input />
  </Convertor>,
  document.getElementById('root')
)
