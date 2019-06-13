import * as React from 'react'

interface Props {
  convert: boolean
  mode: 'exist' | 'display'
  children: [React.ReactNode, React.ReactNode]
}

export default function Convertor (props: Props) {
  const { convert, mode, children } = props
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
  return (
    <>{convert ? children[1] : children[0]}</>
  )
}

Convertor.defaultProps = {
  convert: false,
  mode: 'exist'
}
