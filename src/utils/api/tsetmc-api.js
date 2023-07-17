const baseUrl = "http://cdn.tsetmc.com/api/Index";

/**
 * get All indexes
 * @param
 * @returns {Promise<Object[]>} Response array of all indexes
 */

export const getAllIndex = async () => {
  const url = `${baseUrl}/GetIndexB1LastAll/All/1`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

/**
 * Fetches the details of a given index
 * @param {string} id - ID of the index, e.g. '32097828799138957'
 * @returns {Promise<Object[]>} Response array of all history
 */

export const getIndexHistory = async (id, signal = {}) => {
  const url = `${baseUrl}/GetIndexB2History/${id}`;
  try {
    const response = await fetch(url, {
      signal,
    });

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    return await response.json();
  } catch (error) {
    // TODO: Handle error
    console.log(error);
  }
};
