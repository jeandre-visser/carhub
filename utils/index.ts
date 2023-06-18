const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f68de90bc2msh0afc2ba5c8e7022p11c4fejsn457033c3b522',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}

export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'f68de90bc2msh0afc2ba5c8e7022p11c4fejsn457033c3b522',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}
