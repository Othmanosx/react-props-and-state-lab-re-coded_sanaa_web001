import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  handleonChangeType = (t) => {
    this.setState({
      ...this.state, filters: {
        type: t
      }
    })
  }
  onFindPetsClick = () => {
    switch (this.state.filters.type) {
      case 'all':
        fetch('/api/pets').then(res => res.json()).then(data => this.setState({
          ...this.state, pets: data
        }))
        break
      case 'cat':
        fetch('/api/pets?type=cat').then(res => res.json()).then(data => this.setState({
          ...this.state, pets: data
        }))
        break
      case 'dog':
        fetch('/api/pets?type=dog').then(res => res.json()).then(data => this.setState({
          ...this.state, pets: data
        }))
        break
      case 'micropig':
        fetch('/api/pets?type=micropig').then(res => res.json()).then(data => this.setState({
          ...this.state, pets: data
        }))
        break
      default:
        fetch('/api/pets').then(res => res.json()).then(data => this.setState({
          ...this.state, pets: data
        }))
        break
    }
  }

  onAdoptPet = (id) => {
    this.state.pets.map(pet => pet.id == id ? this.updateState(pet) : null)
  }
  updateState = (pet) => {
    let newState = [...this.state.pets]
    newState[this.state.pets.indexOf(pet)].isAdopted = true
    this.setState(
      {
        ...this.state, pets: newState
      }
    )
  }
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters type={this.state.filters.type} onChangeType={this.handleonChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
