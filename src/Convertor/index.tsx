import * as React from 'react'

export enum Mode {
  display = 'display',
  exist = 'exist'
}

interface Props {
  convert: boolean
  mode: Mode
  children: [React.ReactElement, React.ReactElement]
}

export default function Convertor (props: Props) {
  const { convert, mode, children } = props
  if (mode === Mode.display) {
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
