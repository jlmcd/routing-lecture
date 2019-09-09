import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const House = ({ match, mainColor, secondaryColor }) => {
  return (
    <>
      <header style={{background: secondaryColor, color: mainColor}}>
        <h2>Welcome to <span style={{textTransform: 'capitalize'}}>{match.params.name}</span>!</h2>
      </header>
      <nav>
        <Link to='/'>Great Hall</Link>
        <Link to='/about'>History of Magic</Link>
      </nav>
    </>
  )
}

export default withRouter(House)
