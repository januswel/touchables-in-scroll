import React from 'react'

import Buttons from './components/Buttons'

const DATA = ['foo', 'bar', 'buz', 'hoge', 'moge', 'blar', 'poo', 'end']

export default function App() {
  return <Buttons data={DATA} />
}
