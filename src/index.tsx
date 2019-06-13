import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Convertor from './Convertor'

ReactDOM.render(
  <Convertor convert mode="display">
    2
    <input />
  </Convertor>,
  document.getElementById('root')
)
