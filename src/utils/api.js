export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    return response.json();
  };
  