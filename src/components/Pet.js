import React from "react";

function Pet( {pet, onAdoptPet} ) {
  const {type, gender, weight, name, age, id, isAdopted} = pet;
  const adoptedButton = isAdopted ? <button className="ui disabled button">Already adopted</button> :  <button id={id} onClick={handleClick} className="ui primary button">Adopt pet</button>
  
  function handleClick (e) {
    onAdoptPet(e.target.id)
  }
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === 'male' ? '♂' : '♀'}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {adoptedButton}
      </div>
    </div>
  );
}

export default Pet;
