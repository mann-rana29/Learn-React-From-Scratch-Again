import React from 'react'
import Card from './components/card'
import { data } from './utils'

const App = () => {
  return (
    <div className='parent'>
      {data.map(function(elem, idx){
         return <div key={idx}>
          <Card name = {elem.name} dribble = {elem.dribble} defence = {elem.defence} pace = {elem.pace} pass = {elem.pass} shot = {elem.shot} physical = {elem.physical} image = {elem.image} />
         </div>
      })}
    </div>
  )
}

export default App
