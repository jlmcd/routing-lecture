import React from 'react'
import './App.css'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import House from './components/House'
import MissingPage from './components/MissingPage'

class App extends React.Component {
  state = {
    house: null,
    mainColor: '',
    secondaryColor: ''
  }
  updateHouseInfo = newState => {
    this.setState(newState)
  }
  navigateHome = () => {
    window.location = '/#/'
  }
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header onClick={() => this.navigateHome()}>
            <h1>Hoggy Hoggy Hogwarts</h1>
            <img
              src="https://vignette.wikia.nocookie.net/harrypotter/images/a/ae/Hogwartscrest.png/revision/latest?cb=20110806202805"
              alt=""
            />
          </header>
          <Switch>
            {/* THE COMPONENT METHOD */}
            <Route
              exact
              path="/"
              component={() => (
                <Home
                  updateHouseInfo={this.updateHouseInfo}
                  sorted={this.state.house}
                />
              )}
            />
            {/* THE CHILDREN METHOD */}
            <Route path="/about">
              <About sorted={this.state.house} />
            </Route>
            {/* THE RENDER METHOD */}
            <Route
              path="/house/:name"
              render={() => (
                <House
                  mainColor={this.state.mainColor}
                  secondaryColor={this.state.secondaryColor}
                />
              )}
            />
            <Route component={MissingPage} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App
