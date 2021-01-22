const BASE_URL = "https://swapi.dev/api/";

function fetchStarships(pageURL) {
  const url = pageURL || BASE_URL + "starships/";
  return fetch(url).then((res) => res.json());
}

export { fetchStarships };
