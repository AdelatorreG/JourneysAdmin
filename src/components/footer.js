import React from 'react'
import {Footer} from 'react-materialize'

export default () => {
  return (
    <div color = "blue">
<Footer copyrights="©2018 Journeys.com" left className='blue'
  moreLinks={
    <ul align="left">
      <li><a className="grey-text text-lighten-3" href="#!">Avisos</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">Privacidad</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">Terminos y Condiciones</a></li>
    </ul>
  }
  >
</Footer>
    </div>
  )
}
