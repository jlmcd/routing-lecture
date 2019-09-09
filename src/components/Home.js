import React from 'react'
import sorting from '../utils/sorting'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

const Home = ({ updateHouseInfo, sorted, history }) => {
  return (
    <>
      <header>
        <h2>Great Hall</h2>
      </header>
      <nav>
        {sorted && (
          <Link to={`/house/${sorted}`}>{`${sorted} Common Room`}</Link>
        )}
        <Link to="/about">History of Magic</Link>
      </nav>
      {!sorted ? <h4>Click to be Sorted!</h4> : <h4>Click to re-sort.</h4>}
      <img
        src="https://vignette.wikia.nocookie.net/harrypotter/images/6/62/Sorting_Hat.png/revision/latest/scale-to-width-down/2000?cb=20161120072849"
        onClick={() => sorting.randomHouse(updateHouseInfo, history.push)}
        alt="Sorting Hat"
      />
    </>
  )
}

export default withRouter(Home)
