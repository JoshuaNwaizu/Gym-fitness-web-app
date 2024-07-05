const fetchData = async (url, options) => {
  const response = await fetch(url, options);

  const data = await response.json();

  return data;
};

const options = {
  method: 'GET',
  hostname: 'exercisedb.p.rapidapi.com',
  port: null,
  //   path: '/exercises/bodyPartList',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};
