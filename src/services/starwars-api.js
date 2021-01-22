const BASE_URL = "https://swapi.dev/api/";

function fetchStarships() {
  return fetch(BASE_URL + "starships/").then((res) => res.json());
}

export { fetchStarships };
