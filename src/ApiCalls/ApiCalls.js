const fetchPeople = async () => {
  const response = await fetch('https://swapi.co/api/people/');
  const peopleData = await response.json();
  const peopleCards = await getPeopleEndPoints(peopleData.results);

  return peopleCards;
};

const fetchPlanets = async () => {
  const response = await fetch('https://swapi.co/api/planets/');
  const planetData = await response.json();
  const planetCards = await getPlanetEndPoints(planetData.results);

  return planetCards;
};

const fetchVehicles = async () => {
  const response = await fetch('https://swapi.co/api/vehicles');
  const vehicleData = await response.json();
  const vehicleCards = await vehicleData.results.map(async vehicle => {
    return ({
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passengers: vehicle.passengers
    });
  });

  return Promise.all(vehicleCards);
};

const getPeopleEndPoints = (person) => {
  const unresolvedPromise = person.map(async (peep) => {
    const planetResponse = await fetch(peep.homeworld);
    const planetData = await planetResponse.json();
    const speciesResponse = await fetch(peep.species);
    const speciesData = await speciesResponse.json();
    
    return ({ 
      name: peep.name,
      homeworld: planetData.name,
      species: speciesData.name,
      language: speciesData.language,
      population: planetData.population
    });
  });

  return Promise.all(unresolvedPromise);
};

const getPlanetEndPoints = (planet) => {
  const unresolvedPromise = planet.map(async (world) => {
    const planetResidents = await getResidentData(world.residents);

    return ({
      name: world.name,
      terrain: world.terrain,
      population: world.population,
      climate: world.climate,
      residents: planetResidents
    });
  });
  
  return Promise.all(unresolvedPromise);
};

const getResidentData =  (residentUrl) => {
  const unresolvedPromise = residentUrl.map(async oneRezi => {
    const response = await fetch(oneRezi);
    const reziData = await response.json();

    return reziData.name + ', ';
  });

  return Promise.all(unresolvedPromise);
};

  // Look into this for a better performance solution
  // let homeworlds = {};
  // let species = {};

  // people.forEach( async person => {
  //   if (!homeworlds[person.homeworld]) {
  //     const response = await fetch(person.homeworld);
  //     const planetData = await response.json();

  //     homeworlds[person.homeworld] = sanitizeData(planetData, 'planet');
  //   }

  //   person.species.forEach(async specie => {
  //     if (!species[specie]) {
  //       const response = await fetch(specie);
  //       const specieData = await response.json();

  //       species[specie] = sanitizeData(specieData, 'species');
  //     }
  //   });
  // });

export { 
  fetchPeople,
  fetchPlanets,
  fetchVehicles
};
