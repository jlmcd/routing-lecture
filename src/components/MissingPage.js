import React from 'react'

const MissingPage = ({history}) => {
  return (
    <div>
      <h1>404</h1>
      <h3>You've found the room of requirements!</h3>
      <h4 onClick={() => history.goBack()}>Click to go back from whence you came.</h4>
    </div>
  )
}

export default MissingPage