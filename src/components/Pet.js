import React from 'react'

class Pet extends React.Component {
  render() {
    let { pet } = this.props
    return (
      <div className="card">
        <div key={pet.id}>
          <div className="content">
            <a className="header">
              {pet.gender == 'male' ? '♂' : '♀'}
              {/* OR  */}
              {pet.name}
            </a>
            <div className="meta">
              <span className="date">{pet.type}</span>
            </div>
            <div className="description">
              <p>Age: {pet.age}</p>
              <p>Weight: {pet.weight}</p>
            </div>
          </div>
          <div className="extra content">
            {pet.isAdopted && <button className="ui disabled button">Already adopted</button>}
            {!pet.isAdopted && <button onClick={() => this.props.onAdoptPet(pet.id)} className="ui primary button">Adopt pet</button>}
          </div>
        </div>
      </div>
    )
  }
}

export default Pet
