import React from 'react';

import { lower } from './utils'

const Highlight = ({ children, toHighlight }) => {
  const regex = new RegExp(`(${toHighlight})`, 'i')

  return children.split(regex).map((chunck, key) => {
    return (lower(chunck) === lower(toHighlight))
      ? <mark key={key}>{chunck}</mark>
      : chunck
  })
}

export default Highlight
