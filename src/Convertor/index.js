import React from 'react'
import PropTypes from 'prop-types'

export default function Convertor ({ convert, mode, children }) {
  if (mode === 'display') {
    return (
      <>
        <div style={{ display: convert ? 'none' : 'block' }}>
          {children[0]}
        </div>
        <div style={{ display: !convert ? 'none' : 'block' }}>
          {children[1]}
        </div>
      </>
    )
  }
  return convert ? children[1] : children[0]
}

Convertor.defaultProps = {
  convert: false,
  mode: 'exist'
}

Convertor.propTypes = {
  convert: PropTypes.bool,
  mode: PropTypes.oneOf(['display', 'exist']),
  children (props, propName, componentName) {
    if (props.children.length !== 2) {
      return new Error(`${componentName} can only and must accept 2 children`)
    }
  }
}
