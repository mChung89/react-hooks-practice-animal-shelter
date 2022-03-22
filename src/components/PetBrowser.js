import React from "react";
import Pet from "./Pet";

function PetBrowser({ pets, setPets }) {

  function onAdoptPet (id) {
    const remPets = pets.map(pet => pet.id !== id ? pet : {...pet, isAdopted: true})
    setPets(remPets)
  }

  const petRender = pets.map(pet => {
  return (
    <Pet
      onAdoptPet={onAdoptPet}
      key={pet.id}
      pet={pet}
    />)
  })

  return <div className="ui cards">{petRender}</div>;
}

export default PetBrowser;
