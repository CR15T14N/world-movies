const apiUrl = "https://65f864eedf151452460f4719.mockapi.io/wmovies/";

export const fetchData = async (endpoint) => {
  const url = `${apiUrl}${endpoint}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Response not ok");
  const data = await res.json();
  return data;
};

// obtener todas las películas
export const fetchAllMovies = async () => {
  return fetchData('movies');
};

// obtener todos las series
export const fetchAllSeries = async () => {
  return fetchData('series');
};

