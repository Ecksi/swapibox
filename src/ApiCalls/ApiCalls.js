const fetchData = async (type) => {
  const response = await fetch(`https://swapi.co/api/${type}`);
  const data = await response.json();

  if (type === 'people') {
    return await getPeopleData(data.results);
  } else if (type === 'planets') {
    return await getPlanetData(data.results);
  } else if (type === 'vehicles') {
    return await getVehicleData(data.results);
  }
};

const getPeopleData = (person) => {
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

const getPlanetData = (planet) => {
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

const getVehicleData = vehicle => {
  const unresolvedPromise = vehicle.map(vehicle => {
    return ({
      name: vehicle.name,
      model: vehicle.model,
      vehicleClass: vehicle.vehicle_class,
      passengers: vehicle.passengers
    });
  });

  return Promise.all(unresolvedPromise);
};

const getResidentData =  (residentsUrl) => {
  const unresolvedPromise = residentsUrl.map(async resident => {
    const response = await fetch(resident);
    const residentData = await response.json();

    return residentData.name + ', ';
  });

  return Promise.all(unresolvedPromise);
};

export default fetchData;
