export const fetchData = async (url, options) => {
  const response = await fetch(url, options);

  const data = await response.json();

  return data;
};

export const exerciseOptions = {
  method: 'GET',

  headers: {
    'x-rapidapi-key': 'c3a5206790mshadb3cd41141e9d7p133105jsne7b857ef27da',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};
